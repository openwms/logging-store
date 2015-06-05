package ch.keepcalm.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by marcelwidmer on 05/06/15.
 */
@Controller
public class WelcomeController {


    @RequestMapping("/")
    public ModelAndView welcome() {
        return new ModelAndView("welcome");
    }

}