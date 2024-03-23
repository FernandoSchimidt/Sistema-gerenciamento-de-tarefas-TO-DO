package br.com.fernandoschimidt.todolist.repository;

import br.com.fernandoschimidt.todolist.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
