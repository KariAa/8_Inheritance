package health;

import java.util.ArrayList;

import people.Doctor;
import people.Patient;

/**
 * Models a patient queue needing certain treatment
 * @author OPE
 * @version 1.0
 * @since 1.1.1991
 */
public class PatientQueue {
    private ArrayList<Patient> patientsInQueue = new ArrayList<Patient>();
    private Doctor doctorInCharge;
    private String hospitalName;

    /**
     * Creates an empty patient treatment queue in given hospital and given doctor in charge
     * @param hospitalName hospital's name
     * @param doc doctor in charge
     */
    public PatientQueue(String hospitalName, Doctor doc){
        this.doctorInCharge=doc;
        this.hospitalName=hospitalName;
    }

    /**
     *
     * @param pat this patient is set into the treatment queue
     */

    public void addPatient(Patient pat){
        this.patientsInQueue.add(pat);
    }

    /**
     * QUEUE data
     * @return Patients in quueue in known hispital with a known doctor in charge
     */
    public String getQueueData(){
        String temp="**** Patient Queue in Hospital " + this.hospitalName;
        temp +="\nDoctor in charge is " + this.doctorInCharge.getInfo();
        temp +="\nPatients in the queue";
        int i=1;
        for(Patient p : this.patientsInQueue){
            temp+="\n"+ i + ". " +   p.getInfo();
            i++;
        }
        return temp;
    }
}
