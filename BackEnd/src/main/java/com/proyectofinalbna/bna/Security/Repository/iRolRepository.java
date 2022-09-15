
package com.proyectofinalbna.bna.Security.Repository;

import com.proyectofinalbna.bna.Security.Entity.Rol;
import com.proyectofinalbna.bna.Security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iRolRepository extends JpaRepository<Rol, Integer> {
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
}
