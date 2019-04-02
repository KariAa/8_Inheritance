package people;

/**
 * Models a patient with essential healthy data
 * @author KA
 * @version 1.0
 * @since 1.1.1990
 */
public class Patient extends Person {
   private String treatment;
   private int systolic;
   private int diastolic;

    /**
     * Create a patient with all needed healthy data
     * @param name patoent's whole name
     * @param treatment treatment neede
     * @param systolic hgmm
     * @param diastolic  hgmm
     */
    public Patient(String name, String treatment, int systolic, int diastolic){
        super(name);
        this.treatment=treatment;
        this.systolic=systolic;
        this.diastolic=diastolic;
    }

    /**
     *
     * @return all data known from a patient
     */
    @Override
    public String getInfo(){
        return super.getInfo() +
                "\n - healthy data:  systolic " + this.systolic + "hgmm, diastolic " +
                this.diastolic + " hgmm" +
                "\n - treatment: " + this.treatment;
    }
}
