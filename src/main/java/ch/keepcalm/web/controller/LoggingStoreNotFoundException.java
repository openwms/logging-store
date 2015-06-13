package ch.keepcalm.web.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by marcelwidmer on 13/06/15.
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class LoggingStoreNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 8195089739293970818L;

    public LoggingStoreNotFoundException(Long id) {
        super("could not find log '" + id + "'.");
    }
}