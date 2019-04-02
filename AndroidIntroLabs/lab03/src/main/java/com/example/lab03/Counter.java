package com.example.lab03;

public class Counter {
    private int value;

    public Counter() {
        value = 0;
    }

    public void reset() {
        value = 0;
    }

    public int getValue() {
        return value;
    }

    public void increment() {
        value++;
    }

    public void decrement() {
        value--;
    }
}
