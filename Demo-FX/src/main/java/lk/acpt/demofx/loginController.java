package lk.acpt.demofx;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.ComboBox;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;

import java.net.URL;
import java.util.ResourceBundle;

public class loginController implements Initializable{
    @FXML
    private TextField txtEmail;

    @FXML
    private PasswordField txtPassword;

    @FXML
    private ComboBox<String> cmbsubjct;

    @FXML
    void login(ActionEvent event) {
        String email = txtEmail.getText();
        String password = txtPassword.getText();

        System.out.println(email + " " + password);

        /*java wrapper classes
        byte,short,int,long,double,char,boolean--->data types
        Byte,Short,Integer,Float,Double,Character,Boolean---->java classes

        String age ="34";
        int num = Integer.parseInt(age);
         */

        clear();
    }

    public void clear() {
        txtEmail.setText("");
        txtPassword.setText("");
    }

    @Override
    public void initialize(URL url, ResourceBundle resourceBundle) {
        String[] subjects = {"English", "sinhl", "Maths"};

        cmbsubjct.getItems().addAll(subjects);

        System.out.println("i run when screen ups");
    }
}