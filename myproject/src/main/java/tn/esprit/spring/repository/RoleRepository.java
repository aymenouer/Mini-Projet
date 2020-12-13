package tn.esprit.spring.repository;
import java.util.Optional;
import tn.esprit.spring.entity.ERole;
import tn.esprit.spring.entity.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
public interface RoleRepository extends MongoRepository<Role, String> {
	  Optional<Role> findByName(ERole name);
}
