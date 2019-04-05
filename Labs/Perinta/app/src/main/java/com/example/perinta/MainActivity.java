package com.example.perinta;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import health.PatientQueue;
import people.Doctor;
import people.Patient;
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

        Patient pat1 = new Patient("Paavo Peloton", "Varpaan poisto", 129,87);
        allText += "\nPatient: " + pat1.getInfo();


        Patient pat2 = new Patient("Kake Aivoton", "Uusi kampus", 139,77);
        Patient pat3 = new Patient("Maija Puujalka", "Uusi vasen jalka", 125,83);
        Patient pat4 = new Patient("Oscar Olematon", "Uusi olemus - Nike", 122,76);

        //**************************** Lopyullinen
        PatientQueue pq = new PatientQueue("Jorvi", doc);
        pq.addPatient(pat1);
        pq.addPatient(pat2);
        pq.addPatient(pat3);
        pq.addPatient(pat4);


        allText ="***  LOPULLINEN \n" + pq.getInfo();
        tvAllOutput.setText(allText);



    }
}
