package ch.keepcalm.web.controller;

import ch.keepcalm.web.model.LoggingStore;
import ch.keepcalm.web.repository.LoggingStoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by marcelwidmer on 25/05/15.
 * <pre>
 *     <code>
 *         {
 * "clientApplikation":"SPA",
 * "clientVersion":"1.0",
 * "correlationId": "11212",
 * "debugInformation":"Hello World",
 * "faultMessage":"Hello World Message",
 * "faultCode":"289-36",
 * "faultType":"DATEN",
 * "severity":"DEBUG"
 * }
 *     </code>
 * </pre>
 */
@RestController
@RequestMapping("/services/rest")
public class LoggingStoreController {

    @Autowired
    private LoggingStoreRepository repository;

    // tag::post[]
    @RequestMapping(value = "/log", method = RequestMethod.POST)
    public ResponseEntity log(@Valid @RequestBody LoggingStore loggingStore) {
        repository.saveAndFlush(loggingStore);
        return new ResponseEntity(new EmptyJsonResponse(), HttpStatus.CREATED);
    }
    // end::post[]

    // tag::getall[]
    @RequestMapping(value = "/log/", method = RequestMethod.GET)
    public List<LoggingStoreAndLink> redLogs() {
        List<LoggingStoreAndLink> loggingStoreAndLinks = new ArrayList<LoggingStoreAndLink>();

        for (LoggingStore loggingStore : repository.findAll()) {
            loggingStoreAndLinks.add( new LoggingStoreAndLink(loggingStore));
        }
        return  loggingStoreAndLinks;
    }
    // end::getall[]

    // tag::getone[]
    @RequestMapping(value = "/log/{id}", method = RequestMethod.GET)
    public LoggingStore getLoggingStore(@PathVariable Long id) {
        //this.validateLog(id);
        // look up releated templat
        LoggingStore one = repository.findOne(id);
        // TODO
        return one;
    }
    // end::getone[]

    // TODO
   /* private void validateLog(Long id) {
        if(this.repository.findOne(id) == null){
            new LoggingStoreNotFoundException(id);
        }
        Lambda
       this.repository.findOne(id).orElseThrow(
                () -> new LoggingStoreNotFoundException(id));
    }*/


}
