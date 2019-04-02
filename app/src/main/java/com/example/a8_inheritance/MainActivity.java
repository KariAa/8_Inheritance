package com.example.a8_inheritance;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import health.PatientQueue;
import people.Doctor;
import people.Patient;
import people.Person;

public class MainActivity extends AppCompatActivity {
    private TextView tvPersons;
    private TextView tvPatients;
    private TextView tvDoctor;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Find UI widgets
        tvPersons = findViewById(R.id.tvPerson);
        tvPatients =findViewById(R.id.tvPatients);
        tvDoctor =findViewById(R.id.tvDoctor);

        // Test Person class
        Person p1 = new Person("Mary Poppins");
        Person p2 = new Person("Harry Potter");
        String personsText = "**Persons \n" + p1.getInfo() +"\n" + p2.getInfo();
        tvPersons.setText(personsText);

        //Test Patient class
        Patient pat1 = new Patient("Mikko Miikkulainen", "lobotomia" , 85, 121);
        Patient pat2 = new Patient("Maija Meikäläinen", "jalan kipsaus" , 1055, 101);
        Patient pat3 = new Patient("Teppo Tarkka", "uusi silmä" , 85, 121);
        Patient pat4 = new Patient("Teijo Mannekiini", "kynsien lakkaus" , 82, 133);
        Patient pat5 = new Patient("Kake Koillinen", "uusi sydän" , 95, 115);
        String patientsText = "**Patients \n" + pat1.getInfo() +"\n" + pat2.getInfo();
        tvPatients.setText(patientsText);

        //Test Doctor class
        Doctor doc = new Doctor("Seija Kallonkutistaja", "Aivokirurgia");
        tvDoctor.setText(doc.getInfo());

        //Test PatientQueue
        PatientQueue pq = new PatientQueue("Jorvi", doc);
    }
}