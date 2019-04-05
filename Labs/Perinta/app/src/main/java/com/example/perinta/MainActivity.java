package com.example.perinta;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import people.Doctor;
import people.Person;

public class MainActivity extends AppCompatActivity {
    private TextView tvAllOutput;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //Hae viittaus textView widgettiin
        tvAllOutput = findViewById(R.id.tvTest);
        String allText = "** LUOKKIEN TESTAUS\n";

        Person p1 = new Person("Maija Poppanen");
        allText += "\nPerson: " + p1.getInfo();
        Doctor doc = new Doctor("Lauri Lääkäri", "Kallonkutistaja");
        allText += "\nDoctor: " + doc.getInfo();

        tvAllOutput.setText((allText));

    }
}
