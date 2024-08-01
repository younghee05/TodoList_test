package com.toyproject.todolist.controller;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqPutTodoDto;
import com.toyproject.todolist.service.TodoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @PostMapping("/todo")
    public ResponseEntity<?> addTodo(@RequestBody ReqAddTodoDto reqAddTodoDto) {
        return ResponseEntity.ok().body(todoService.addTodo(reqAddTodoDto));
    }

    @GetMapping("/todolist/{date}")
    public ResponseEntity<?> searchTodo(@PathVariable String date) {
        return ResponseEntity.ok().body(todoService.findTodoLists(date));
    }

    @DeleteMapping("/todo/{todoId}")
    public ResponseEntity<?> deleteTodo(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.deleteTodo(todoId));
    }

    @PutMapping("/todo/{todoId}/status")
    public ResponseEntity<?> updateTodoStatus(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.updateTodoStatus(todoId));
    }

    @PutMapping("/todo")
    public ResponseEntity<?> updateTodoStatus(@RequestBody ReqPutTodoDto respPutTodoDto) {
        return ResponseEntity.ok().body(todoService.updateTodo(respPutTodoDto));
    }

    @GetMapping("/todo/{todoId}")
    public ResponseEntity<?> getTodo(@PathVariable int todoId) {
        return ResponseEntity.ok().body(todoService.getTodo(todoId));
    }


}
