package people;

/**
 * Models a doctor with name and title
 * @author OPE
 * @since 199
 * @version 1.0
 */
public class Doctor extends Person {
    private String title;

    /**
     * Creates a doctor with name and professional title
     * @param name doctor's whole name
     * @param title professional title
     */
    public Doctor(String name, String title){
        super(name);
        this.title=title;
    }

    /**
     * All doctor's data
     * @return name and title
     */
    @Override
    public String getInfo(){
        return super.getInfo() + ", " + this.title;
    }
}
