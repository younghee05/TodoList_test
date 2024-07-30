package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;

public interface TodoService {
    // 1 : 저장 / 0: 저장 x
    int addTodo(ReqAddTodoDto reqAddTodoDto);
}
