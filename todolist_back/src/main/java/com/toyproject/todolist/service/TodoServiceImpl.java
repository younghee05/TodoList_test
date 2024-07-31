package com.toyproject.todolist.service;

import com.toyproject.todolist.controller.TodoController;
import com.toyproject.todolist.dto.ReqAddTodoDto;
import com.toyproject.todolist.dto.ReqPutTodoDto;
import com.toyproject.todolist.dto.RespDeleteDto;
import com.toyproject.todolist.dto.RespGetListDto;
import com.toyproject.todolist.entity.Todo;
import com.toyproject.todolist.repository.TodoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

    @Autowired
    private TodoMapper todoMapper;

    @Override
    public int addTodo(ReqAddTodoDto reqAddTodoDto) {
        // dto를 entity로 변환 시켜줌
        Todo todo = Todo.builder()
                .content(reqAddTodoDto.getContent())
                .status(reqAddTodoDto.getStatus())
                .date(reqAddTodoDto.getDate())
                .build();
        return todoMapper.save(todo);
    }

    @Override
    public List<RespGetListDto> findTodoLists(String date) {
        List<RespGetListDto> dtos = new ArrayList<>();
        List<Todo> todos = todoMapper.findTodoList(date);

        for (Todo todo : todos) {
            RespGetListDto dto = RespGetListDto.builder()
                    .todoId(todo.getTodoId())
                    .content(todo.getContent())
                    .status(todo.getStatus())
                    .build();

            dtos.add(dto);
        }

        return dtos;
    }

    @Override
    public int deleteTodo(int id) {
        return todoMapper.delete(id);
    }

    @Override
    public int updateTodoStatus(int id) {
        return todoMapper.updateStatus(id);
    }

    @Override
    public int updateTodo(ReqPutTodoDto reqPutTodoDto) {
        Todo todo = Todo.builder()
                .todoId(reqPutTodoDto.getTodoId())
                .content(reqPutTodoDto.getContent())
                .build();
        return todoMapper.updateTodo(todo);
    }


}
