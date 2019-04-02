package com.example.a8_inheritance;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import people.Person;

public class MainActivity extends AppCompatActivity {
    private TextView tvPersons;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Find UI widgets
        tvPersons = findViewById(R.id.tvPerson);

        // Test Person class
        Person p1 = new Person("Mary Poppins");
        Person p2 = new Person("Harry Potter");
        String personsText = "**Persons \n" + p1.getInfo() +"\n" + p2.getInfo();
        tvPersons.setText(personsText);

    }
}