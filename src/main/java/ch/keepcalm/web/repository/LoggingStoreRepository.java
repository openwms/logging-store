package ch.keepcalm.web.repository;

import ch.keepcalm.web.domain.LoggingStore;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by marcelwidmer on 03/06/15.
 */
public interface LoggingStoreRepository extends JpaRepository<LoggingStore, Long> {

}
