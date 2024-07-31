package com.toyproject.todolist.service;

import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.RespGetListDto;
import com.toyproject.todolist.dto.ReqPutTodoDto;

import java.util.List;

public interface TodoService {
    // 1 : 저장 / 0: 저장 x
    int addTodo(ReqAddTodoDto reqAddTodoDto);

    List<RespGetListDto> findTodoLists(String date);

    int deleteTodo(int id);

    int updateTodoStatus(int id);

    int updateTodo(ReqPutTodoDto reqPutTodoDto);
}
