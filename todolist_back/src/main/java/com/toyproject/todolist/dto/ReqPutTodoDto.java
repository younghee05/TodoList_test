package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReqPutTodoDto {
    private int todoId;
    private String content;
}
