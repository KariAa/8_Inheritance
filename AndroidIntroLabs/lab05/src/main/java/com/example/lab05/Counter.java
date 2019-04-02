package com.example.lab05;

public class Counter {
    private int value;

    public Counter() {
        value = 0;
    }

    public Counter(int value) {
        this.value = value;
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
