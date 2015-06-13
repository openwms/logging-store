package ch.keepcalm.web.controller;

import org.springframework.hateoas.VndErrors;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by marcelwidmer on 13/06/15.
 */
@ControllerAdvice
public class LoggingStoreControllerAdvice {

    @ResponseBody
    @ExceptionHandler(LoggingStoreNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    VndErrors userNotFoundExceptionHandler(LoggingStoreNotFoundException ex) {
        return new VndErrors("error", ex.getMessage());
    }
}