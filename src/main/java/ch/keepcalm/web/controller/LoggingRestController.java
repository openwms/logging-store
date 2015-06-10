package ch.keepcalm.web.controller;

import ch.keepcalm.web.domain.LoggingStore;
import ch.keepcalm.web.repository.LoggingStoreRepository;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

/**
 * <p> Created by marcelwidmer on 25/05/15. <p/>
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
@RequestMapping("/services/rest/log")
public class LoggingRestController {

    @Autowired
    private LoggingStoreRepository repository;

    // tag::contains[]
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity log(@Valid @RequestBody LoggingStore loggingStore) {
        repository.saveAndFlush(loggingStore);
        return new ResponseEntity(new EmptyJsonResponse(), HttpStatus.CREATED);
    }
    // end::contains[]


    @RequestMapping(method = RequestMethod.GET)
    public List<LoggingStore> logs() {
        return repository.findAll();
    }


    @JsonSerialize
    private class EmptyJsonResponse {
    }
}
