package ch.keepcalm.web.config;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;

import javax.sql.DataSource;

/**
 * Created by marcelwidmer on 05/06/15.
 *
 * Only the POST request is permitted for anonymous.
 */
@Configuration
@EnableWebMvcSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    private Logger log = Logger.getLogger(WebSecurityConfig.class);

    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers(HttpMethod.POST, "/services/rest/log").permitAll()
                .anyRequest().authenticated()
                .and().formLogin().loginPage("/login").permitAll()
                .and().logout().permitAll();
        http.formLogin().defaultSuccessUrl("/app/index.html");
    }


    @Autowired
    protected void configureForDevelopment(AuthenticationManagerBuilder auth, Environment env) throws Exception {
       if (env.acceptsProfiles("!production")){
           log.info("Setting up memory-based authentication for dev");
           auth.inMemoryAuthentication().withUser("user").password("password").roles("USER");
       }
    }


    @Autowired
    protected void configureForProduction(AuthenticationManagerBuilder auth, Environment env) throws Exception {
        if (env.acceptsProfiles("production")){
            log.info("Setting up memory-based authentication for production");
            auth.jdbcAuthentication().dataSource(dataSource);
        }
    }


}