import java.util.ArrayList;
import java.util.Scanner;

public class MobilePhone {
    private ArrayList<String> contacts = new ArrayList<String>();
    private ArrayList<String> phoneNr = new ArrayList<String>();



    public void contactsInPhone() {
        System.out.println("These are your contacts: ");
        for (int i = 0; i < contacts.size(); i++){
            System.out.println(i+1 + ". " + contacts.get(i) + " --> " + phoneNr.get(i));

        }

    }



    public void addContacts() {
        boolean error = false;
        Scanner scanner = new Scanner(System.in);
        System.out.println("How many contacts do you want to add?");
        int count;
        count = scanner.nextInt();
        scanner.nextLine();

        if (count <= 0){
            System.out.println("Error");
            error = true;
        }
        if(!error){
        for (int i = 1; i <= count; i++){

            System.out.println("Enter the #" + i  + " contact name.");
            String name;
            name = scanner.nextLine();

            boolean err = false;
            for(int a = 0; a < contacts.size(); a++){
            if (name == contacts.get(a)){
                System.out.println("Contact exists");
                err = true;
                break;
            }
            }
            if(!err){
            contacts.add(name);
            System.out.println("Now the phone number: ");
            String PhoneNr;
            PhoneNr = scanner.nextLine();

                boolean erro = false;
                for(int a = 0; a < phoneNr.size(); a++){
                    if (name == phoneNr.get(a)){
                        System.out.println("Phone number exists");
                        erro = true;
                        break;
                    }
                }
                if(!erro){
            phoneNr.add(PhoneNr);
            System.out.println("Contact added");
            System.out.println("");
                }
            }
        }
        }
    }

    public void removeContacts() {
        boolean error = false;
        System.out.println("Which contact do you want to remove?");
        Scanner scanner = new Scanner(System.in);
        String name = scanner.nextLine();

        if (contacts.indexOf(name) < 0){
            System.out.println("Contact doesnt exists");
            error = true;
        }
    if (!error){
        contacts.remove(contacts.indexOf(name));
        System.out.println("Contact deleted");
    }

    }
    public void updateContact() {
        Scanner scanner = new Scanner(System.in);


        System.out.println("Choose which contact to edit");
        String nume = scanner.nextLine();
        boolean error = false;
        if (contacts.indexOf(nume) < 0) {
            System.out.println("Contact doesnt exists");
            error = true;
        }
        if (!error) {
            int index;
            System.out.println("Choose 1 to modify the name");
            System.out.println("Choose 2 to modify the phone number");
            System.out.println("Choose 3 to modify both");
            index = scanner.nextInt();
            scanner.nextLine();


            if (index == 1) {
                System.out.println("Choose new name");
                String newName;
                newName = scanner.nextLine();
                contacts.set(contacts.indexOf(nume), newName);
                System.out.println("The contact has been modified");
            } else if (index == 2) {
                System.out.println("Choose new phone number");
                String newNr;
                newNr = scanner.nextLine();
                phoneNr.set(contacts.indexOf(nume), newNr);
                System.out.println("The contact has been modified");
            } else if (index == 3) {
                System.out.println("Choose new name");
                String newName;
                newName = scanner.nextLine();
                contacts.set(contacts.indexOf(nume), newName);
                System.out.println("Choose new phone number");
                String newNr;
                newNr = scanner.nextLine();
                phoneNr.set(contacts.indexOf(nume), newNr);
                System.out.println("The contact has been modified");
            } else {
                System.out.println("Error");
            }
        }
    }

    public void findContact() {
        boolean error = false;
        System.out.println("What is the name of the contact that you want to know if it exists?");
        Scanner scanner = new Scanner(System.in);
        String nume = scanner.nextLine();
        if(contacts.indexOf(nume) < 0){
            System.out.println("Contact doesnt exist");
            error = true;
        }
        if(!error){
        System.out.println("The contact and his name exists");
        System.out.println(contacts.indexOf(nume) + 1);
        }
    }
}
