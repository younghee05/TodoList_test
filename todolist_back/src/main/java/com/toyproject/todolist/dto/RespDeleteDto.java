package com.toyproject.todolist.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespDeleteDto {
    private int todoId;
    private String content;
    private int status;
    private String Date;
}
