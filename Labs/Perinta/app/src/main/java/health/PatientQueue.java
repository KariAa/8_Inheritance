package health;

import java.util.ArrayList;

import people.Doctor;
import people.Patient;

public class PatientQueue {
    private String hospitalName;
    private Doctor doctorInCharge;
    ArrayList<Patient> patientsInQueue = new ArrayList<Patient>();

    public PatientQueue(String hospitalName, Doctor doctorInCharge){
        this.hospitalName=hospitalName;
        this.doctorInCharge=doctorInCharge;
    }
    public void addPatient(Patient pat){
        this.patientsInQueue.add(pat);
    }

    public String getInfo(){
        String temp =" *** Treatment Queue in " + this.hospitalName;
        temp+= "\n - Doctor in charge is "+ this.doctorInCharge.getInfo();
        temp+= "\n - Patients in queue";
        int i=1;
        for(Patient p : this.patientsInQueue){
            temp+= "\n   "+ i +"."  + p.getInfo();
            i++;
        }
        return temp;
    }

}
