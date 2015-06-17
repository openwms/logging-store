package ch.keepcalm.web.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Date;

import org.hibernate.validator.constraints.NotEmpty;

/**
 * faultTyp :
 * <ul>
 * <li>DATEN</li>
 * <li>SYSTEM_SOFT</li>
 * <li>SYSTEM_SOFT_KOMPATIBILITAET</li>
 * <li>SYSTEM_SOFT_SCHEMA</li>
 * <li>SYSTEM_UMGEBUNG</li>
 * </ul>
 * severity :
 * <ul>
 * <li>DEBUG</li>
 * <li>ERROR</li>
 * <li>INFO</li>
 * <li>WARNING</li>
 * </ul>
 * Beispiel Request
 * <pre>
 *     <code>
 *         {
 *              "clientApplikation": "SPA",
 *              "clientVersion": "1.0",
 *              "correlationId": "11212",
 *              "debugInformation": "Hello World",
 *              "faultMessage": "Helsana Hello World",
 *              "faultCode": "289-36",
 *              "faultType": "DATEN",
 *              "severity": "DEBUG",
 *          }
 *     </code>
 * </pre>
 * Beispiel Response
 * <pre>
 *     <code>
 *         {}
 *     </code>
 * </pre>
 */
@Entity
public class LoggingStore implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;


    @NotEmpty
    @NotNull
    @Size.List({
            @Size(min = 1),
            @Size(max = 30)
    })
    private String clientApplikation;


    @NotEmpty
    @NotNull
    @Size.List({
            @Size(min = 1),
            @Size(max = 1024)
    })
    private String clientVersion;

    @NotEmpty
    @NotNull
    @Size.List({
            @Size(min = 1),
            @Size(max = 4000)
    })
    private String debugInformation;

    @NotEmpty
    @NotNull
    @Size.List({
            @Size(min = 1),
            @Size(max = 256)
    })
    private String faultCode;

    @NotEmpty
    @NotNull
    @Size(min = 1, max = 4000)
    private String faultMessage;

    /**
     * DATEN / SYSTEM_SOFT / SYSTEM_SOFT_KOMPATIBILITAET / SYSTEM_SOFT_SCHEMA / SYSTEM_UMGEBUNG
     */
    @NotEmpty
    @NotNull
    @Size.List({
            @Size(min = 1),
            @Size(max = 64)
    })
    @Pattern(regexp = "\\bDATEN\\b|\\bSYSTEM_SOFT\\b|\\bSYSTEM_SOFT_KOMPATIBILITAET\\b|\\bSYSTEM_SOFT_SCHEMA\\b|\\bSYSTEM_UMGEBUNG\\b")
    private String faultType;

    /**
     * DEBUG / ERROR / INFO / WARNING
     */
    @NotEmpty
    @NotNull
    @Size.List({
            @Size(min = 1),
            @Size(max = 64)
    })
    @Pattern(regexp = "\\bDEBUG\\b|\\bINFO\\b|\\bERROR\\b|\\bWARNING\\b")
    private String severity;


    @NotEmpty
    @NotNull
    @Size.List({
            @Size(min = 1),
            @Size(max = 64)
    })
    private String correlationId;


    @PrePersist
    protected void onCreate() {
        timestamp = new Date();
    }

    public void setClientVersion(String clientVersion) {
        this.clientVersion = clientVersion;
    }

    public void setClientApplikation(String clientApplikation) {
        this.clientApplikation = clientApplikation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDebugInformation(String debugInformation) {
        this.debugInformation = debugInformation;
    }

    public void setFaultCode(String faultCode) {
        this.faultCode = faultCode;
    }

    public void setFaultMessage(String faultMessage) {
        this.faultMessage = faultMessage;
    }

    public void setFaultType(String faultType) {
        this.faultType = faultType;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getCorrelationId() {
        return correlationId;
    }

    public void setCorrelationId(String correlationId) {
        this.correlationId = correlationId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        LoggingStore that = (LoggingStore) o;

        if (timestamp != null ? !timestamp.equals(that.timestamp) : that.timestamp != null) return false;
        if (clientApplikation != null ? !clientApplikation.equals(that.clientApplikation) : that.clientApplikation != null)
            return false;
        if (clientVersion != null ? !clientVersion.equals(that.clientVersion) : that.clientVersion != null)
            return false;
        if (debugInformation != null ? !debugInformation.equals(that.debugInformation) : that.debugInformation != null)
            return false;
        if (faultCode != null ? !faultCode.equals(that.faultCode) : that.faultCode != null) return false;
        if (faultMessage != null ? !faultMessage.equals(that.faultMessage) : that.faultMessage != null) return false;
        if (faultType != null ? !faultType.equals(that.faultType) : that.faultType != null) return false;
        if (severity != null ? !severity.equals(that.severity) : that.severity != null) return false;
        return !(correlationId != null ? !correlationId.equals(that.correlationId) : that.correlationId != null);
    }

    @Override
    public int hashCode() {
        int result = timestamp != null ? timestamp.hashCode() : 0;
        result = 31 * result + (clientApplikation != null ? clientApplikation.hashCode() : 0);
        result = 31 * result + (clientVersion != null ? clientVersion.hashCode() : 0);
        result = 31 * result + (debugInformation != null ? debugInformation.hashCode() : 0);
        result = 31 * result + (faultCode != null ? faultCode.hashCode() : 0);
        result = 31 * result + (faultMessage != null ? faultMessage.hashCode() : 0);
        result = 31 * result + (faultType != null ? faultType.hashCode() : 0);
        result = 31 * result + (severity != null ? severity.hashCode() : 0);
        result = 31 * result + (correlationId != null ? correlationId.hashCode() : 0);
        return result;
    }
}
