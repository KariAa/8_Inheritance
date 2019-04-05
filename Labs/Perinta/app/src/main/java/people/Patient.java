package people;

public class Patient extends Person{
    private String treatment;
    private int diastolic;
    private int systolic;

    public Patient(String name, String treatment, int diastolic, int systolic){
        super(name);
        this.treatment=treatment;
        this.diastolic=diastolic;
        this.systolic=systolic;
    }

    @Override
    public String getInfo(){
        return super.getInfo() + ", treatment " + this.treatment +
                ", diastolic Hgmm " + this.systolic + " systolic Hgmm " + this.diastolic;
    }
}
