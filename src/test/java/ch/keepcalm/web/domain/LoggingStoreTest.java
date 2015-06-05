package ch.keepcalm.web.domain;

import ch.keepcalm.web.LoggingStoreApplication;
import ch.keepcalm.web.repository.LoggingStoreRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

/**
 * Created by marcelwidmer on 05/06/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = LoggingStoreApplication.class)
@ActiveProfiles("test")
public class LoggingStoreTest {

    @Autowired
    private LoggingStoreRepository repository;

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
    public void testWriteSomeLog() {

        repository.save(getDefualtLoggingStoreObject());
        List<LoggingStore> all = repository.findAll();
        assertNotNull(all);


    }


    @Test(expected = javax.validation.ConstraintViolationException.class)
    public void testEmptyApplicationAndClientVersion() {
        LoggingStore loggingStore = getDefualtLoggingStoreObject();
        loggingStore.setClientApplikation("");
        loggingStore.setClientVersion("");
        repository.save(loggingStore);
    }

    @Test(expected = javax.validation.ConstraintViolationException.class)
    public void testNullApplicationAndClientVersion() {
        LoggingStore loggingStore = getDefualtLoggingStoreObject();
        loggingStore.setClientApplikation(null);
        loggingStore.setClientVersion(null);
        repository.save(loggingStore);
    }

    @Test
    public void testApplicationAndClientVersion() {
        LoggingStore loggingStore = getDefualtLoggingStoreObject();
        loggingStore.setClientApplikation("1");
        loggingStore.setClientVersion("1");
        repository.save(loggingStore);
    }

    @Test(expected = javax.validation.ConstraintViolationException.class)
    public void testApplicationMaxSizeNecativeTest() {
        LoggingStore loggingStore = getDefualtLoggingStoreObject();
        loggingStore.setClientApplikation("1234567890123456789012345678901");
        loggingStore.setClientVersion("1");
        repository.save(loggingStore);
    }

    @Test
    public void testApplicationMaxSizePositiveTest() {
        LoggingStore loggingStore = getDefualtLoggingStoreObject();
        loggingStore.setClientApplikation("123456789012345678901234567890");
        loggingStore.setClientVersion("1");
        try {
            repository.save(loggingStore);
        } catch (Exception e) {
            fail();
        }
    }

    @Test
    public void testNotNullClientVersion() {
        LoggingStore loggingStore = getDefualtLoggingStoreObject();
        loggingStore.setClientVersion(null);
        loggingStore.setClientApplikation("myJUnitAppicationID");

        try {
            repository.save(loggingStore);
//            fail();
        } catch (Exception e) {
            System.out.println(e);
            // OK
        }
    }
}