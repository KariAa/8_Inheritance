package com.example.lab06;

public class President {
    private String name;
    private int    startDuty;
    private int    endDuty;
    private String description;

    public President(String name, int startDuty, int endDuty, String description) {
        this.name        = name;
        this.startDuty   = startDuty;
        this.endDuty     = endDuty;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getStartDuty() {
        return Integer.toString(startDuty);
    }

    public String getEndDuty() {
        return Integer.toString(endDuty);
    }

    public String getDescription() {
        return description;
    }

    @Override
    public String toString() {
        return name;
    }
}
