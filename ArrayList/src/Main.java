import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean quit = false;
        int count;
        MobilePhone Telefon = new MobilePhone();


while (!quit) {

    System.out.println("");
    System.out.println("");
        System.out.println("Choose what you want to do");
        System.out.println("1. Close");
        System.out.println("2. See the contact list");
        System.out.println("3. Add contact");
        System.out.println("4. Delete contact");
        System.out.println("5. Update contact");
        System.out.println("6. Want to know if a contact exists?");
    System.out.println("");


        count = scanner.nextInt();
        scanner.nextLine();

            switch (count) {
                case 1:
                    quit = true;
                    break;
                case 2:
                    Telefon.contactsInPhone();
                    break;
                case 3:
                    Telefon.addContacts();
                    break;
                case 4:
                    Telefon.removeContacts();
                    break;
                case 5:
                    Telefon.updateContact();
                    break;
                case 6:
                    Telefon.findContact();
                    break;
                default:
                    System.out.println("Error");
            }
        }
    }
}
