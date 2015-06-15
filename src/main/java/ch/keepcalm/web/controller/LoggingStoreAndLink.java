package ch.keepcalm.web.controller;

import ch.keepcalm.web.model.LoggingStore;
import org.springframework.hateoas.Link;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * Created by marcelwidmer on 13/06/15.
 */
public class LoggingStoreAndLink {

    private final LoggingStore loggingStore;
    private final Link link;

    // tag::loggingStoreAndLinks[]
    public LoggingStoreAndLink(LoggingStore loggingStore) {
        this.loggingStore = loggingStore;
        this.link = linkTo(methodOn(LoggingStoreController.class).getLoggingStore(loggingStore.getId()))
                .withRel(loggingStore.getId() + " " + loggingStore.getCorrelationId());
        /*this.link = linkTo(LoggingStoreController.class).slash(loggingStore.getId()).withSelfRel();*/
    }
    // end::loggingStoreAndLinks[]

    public LoggingStore getLoggingStore(){
        return loggingStore;
    }
    public Link getLink(){
        return link;
    }
}

