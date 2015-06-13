package ch.keepcalm.web.controller;

/**
 * Created by marcelwidmer on 13/06/15.
 */
public class ErrorInfo {
    public final String url;
    public final String ex;

    public ErrorInfo(String url, Exception ex) {
        this.url = url;
        this.ex = ex.getLocalizedMessage();
    }
}