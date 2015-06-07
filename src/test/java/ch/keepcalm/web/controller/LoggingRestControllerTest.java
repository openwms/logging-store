package ch.keepcalm.web.controller;

import ch.keepcalm.web.LoggingStoreApplication;
import ch.keepcalm.web.domain.LoggingStore;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;

import java.net.URL;

import static org.junit.Assert.assertNotNull;

/**
 * Created by marcelwidmer on 01/06/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = LoggingStoreApplication.class)
@ActiveProfiles("junit")
@WebAppConfiguration
@IntegrationTest({"server.port=0"})
public class LoggingRestControllerTest {

    @Value("${local.server.port}")
    private int port;

    private URL base;
    private RestTemplate template;

    @Before
    public void setUp() throws Exception {
        this.base = new URL("http://127.0.0.1:" + port + "/");
        template = new TestRestTemplate();
    }


    private LoggingStore getDefualtLoggingStoreObject() {
        LoggingStore loggingStore = new LoggingStore();
        loggingStore.setClientApplikation("SPA");
        loggingStore.setClientVersion("1.0");
        loggingStore.setCorrelationId("11212");
        loggingStore.setDebugInformation("Hello World");
        loggingStore.setFaultMessage("Message Hello World");
        loggingStore.setFaultCode("289-36");
        loggingStore.setFaultType("DATEN");
        loggingStore.setSeverity("DEBUG");
        return loggingStore;
    }

    @Test
    public void testLogRestController() {
        LoggingStore loggingStore = getDefualtLoggingStoreObject();
        loggingStore.setClientApplikation("JunitApplicationID");
        loggingStore.setClientVersion("JUnitClientVersion");
        RestTemplate restTemplate = new RestTemplate();
        String log = restTemplate.postForObject(base + "services/rest/log", loggingStore, String.class);
        assertNotNull(log);
    }



}