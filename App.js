import { useEffect, useState } from "react";
import { render } from "react-dom";
import { StatusBar } from "expo-status-bar";
import { useReducer } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  Alert,
  Platform,
  Button,
  Dimensions,
} from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

export default function App() {
  function RoundButton(proop) {
    return (
      <TouchableOpacity
        style={[
          styles.to,
          {
            flex: proop.txt === "0" ? 2 : 1,
            display:
              proop.txt === "O"
                ? isPressed
                  ? "none"
                  : "flex"
                : proop.txt === "N" ||
                  proop.txt === "P" ||
                  proop.txt === "T" ||
                  proop.txt === "M" ||
                  proop.txt === "L"
                ? isPressed
                  ? "flex"
                  : "none"
                : proop.txt === "P"
                ? isPPressed
                  ? "flex"
                  : "none"
                : proop.txt === "1" ||
                  proop.txt === "2" ||
                  proop.txt === "3" ||
                  proop.txt === "4" ||
                  proop.txt === "5" ||
                  proop.txt === "6" ||
                  proop.txt === "7" ||
                  proop.txt === "8" ||
                  proop.txt === "9" ||
                  proop.txt === "0" ||
                  proop.txt === "."
                ? isPPressed
                  ? "none"
                  : isTPressed
                  ? "none"
                  : isMPressed
                  ? "none"
                  : isLPressed
                  ? "none"
                  : "flex"
                : proop.txt === "x^2" ||
                  proop.txt === "x^3" ||
                  proop.txt === "x^y" ||
                  proop.txt === "√x" ||
                  proop.txt === "∛x" ||
                  proop.txt === "y√x" ||
                  proop.txt === "1/x" ||
                  proop.txt === "2^x" ||
                  proop.txt === "10^x" ||
                  proop.txt === "e" ||
                  proop.txt === "π" ||
                  proop.txt === "Rand"
                ? isPPressed
                  ? "flex"
                  : "none"
                : proop.txt === "T"
                ? isTPressed
                  ? "flex"
                  : "none"
                : proop.txt === "sin" ||
                  proop.txt === "cos" ||
                  proop.txt === "tan" ||
                  proop.txt === "sinh" ||
                  proop.txt === "cosh" ||
                  proop.txt === "tanh" ||
                  proop.txt === "ln" ||
                  proop.txt === "e^x" ||
                  proop.txt === "x!" ||
                  proop.txt === "log(2)" ||
                  proop.txt === "log(10)" ||
                  proop.txt === "log(y)"
                ? isTPressed
                  ? "flex"
                  : "none"
                : proop.txt === "M"
                ? isLPressed
                  ? "flex"
                  : "none"
                : proop.txt === "m->foot" ||
                  proop.txt === "foot->m" ||
                  proop.txt === "m->inch" ||
                  proop.txt === "inch->m" ||
                  proop.txt === "m->yard" ||
                  proop.txt === "yard->m" ||
                  proop.txt === "km->mile" ||
                  proop.txt === "mile->km" ||
                  proop.txt === "m->km" ||
                  proop.txt === "cm->inch" ||
                  proop.txt === "inch->cm" ||
                  proop.txt === "cm->m"
                ? isLPressed
                  ? "flex"
                  : "none"
                : proop.txt === "M"
                ? isMPressed
                  ? "flex"
                  : "none"
                : proop.txt === "kg->lbs" ||
                  proop.txt === "lbs->kg" ||
                  proop.txt === "g->oz" ||
                  proop.txt === "oz->g" ||
                  proop.txt === "kg->g" ||
                  proop.txt === "g->kg" ||
                  proop.txt === "kg->ton" ||
                  proop.txt === "ton->kg" ||
                  proop.txt === "ton->USton" ||
                  proop.txt === "g->mg" ||
                  proop.txt === "mg->g" ||
                  proop.txt === "μg->mg"
                ? isMPressed
                  ? "flex"
                  : "none"
                : "flex",

            marginRight:
              proop.txt === "O" ? Dimensions.get("window").width / 1.25 : 0,
            marginTop:
              proop.txt === "O" ||
              proop.txt === "N" ||
              proop.txt === "P" ||
              proop.txt === "T" ||
              proop.txt === "M" ||
              proop.txt === "L"
                ? 25
                : 0,
          },
        ]}
        onPress={() => {
          handlePress(proop.txt);
          if (proop.txt === "O") {
            setIsPressed(true);
          } else if (proop.txt === "N") {
            setIsPressed(false);
            setIsPPressed(false);
            setIsTPressed(false);
            setIsMPressed(false);
            setIsLPressed(false);
          } else if (proop.txt === "P") {
            setIsPPressed(true);
            setIsTPressed(false);
            setIsMPressed(false);
            setIsLPressed(false);
          } else if (proop.txt === "T") {
            setIsTPressed(true);
            setIsPPressed(false);
            setIsMPressed(false);
            setIsLPressed(false);
          } else if (proop.txt === "M") {
            setIsMPressed(true);
            setIsTPressed(false);
            setIsPPressed(false);
            setIsLPressed(false);
          } else if (proop.txt === "L") {
            setIsLPressed(true);
            setIsTPressed(false);
            setIsMPressed(false);
            setIsPPressed(false);
          } else if (
            proop.txt === "+" ||
            proop.txt === "-" ||
            proop.txt === "×" ||
            proop.txt === "÷" ||
            proop.txt === "x^y" ||
            proop.txt === "y√x" ||
            proop.txt === "log(y)"
          ) {
            setIsPPressed(false);
            setIsTPressed(false);
            setIsMPressed(false);
            setIsLPressed(false);
          }
        }}
      >
        <View
          style={[
            styles.button,
            {
              backgroundColor:
                proop.txt === "×" ||
                proop.txt === "÷" ||
                proop.txt === "-" ||
                proop.txt === "+" ||
                proop.txt === "="
                  ? "orange"
                  : proop.txt === "AC" || proop.txt === "±" || proop.txt === "%"
                  ? "grey"
                  : proop.txt === "O" ||
                    proop.txt === "N" ||
                    proop.txt === "P" ||
                    proop.txt === "T" ||
                    proop.txt === "M" ||
                    proop.txt === "L"
                  ? "#191726"
                  : "#2e2d2a",
              height:
                proop.txt === "O" ||
                proop.txt === "N" ||
                proop.txt === "P" ||
                proop.txt === "T" ||
                proop.txt === "M" ||
                proop.txt === "L"
                  ? 65
                  : 80,
            },
          ]}
        >
          <Text
            style={[
              styles.txt,
              {
                color:
                  proop.txt === "AC" || proop.txt === "±" || proop.txt === "%"
                    ? "black"
                    : "white",
                fontSize:
                  proop.txt === "AC" ||
                  proop.txt === "P" ||
                  proop.txt === "T" ||
                  proop.txt === "M" ||
                  proop.txt === "L" ||
                  proop.txt === "O" ||
                  proop.txt === "N" ||
                  proop.txt === "x^2" ||
                  proop.txt === "x^3" ||
                  proop.txt === "x^y" ||
                  proop.txt === "√x" ||
                  proop.txt === "∛x" ||
                  proop.txt === "y√x" ||
                  proop.txt === "1/x" ||
                  proop.txt === "2^x" ||
                  proop.txt === "10^x" ||
                  proop.txt === "sin" ||
                  proop.txt === "cos" ||
                  proop.txt === "tan" ||
                  proop.txt === "sinh" ||
                  proop.txt === "cosh" ||
                  proop.txt === "tanh" ||
                  proop.txt === "ln" ||
                  proop.txt === "e^x" ||
                  proop.txt === "x!"
                    ? 30
                    : proop.txt === "Rand" ||
                      proop.txt === "log(2)" ||
                      proop.txt === "log(10)" ||
                      proop.txt === "log(y)" ||
                      proop.txt === "kg->lbs" ||
                      proop.txt === "lbs->kg" ||
                      proop.txt === "g->oz" ||
                      proop.txt === "oz->g" ||
                      proop.txt === "kg->g" ||
                      proop.txt === "g->kg" ||
                      proop.txt === "kg->ton" ||
                      proop.txt === "ton->kg" ||
                      proop.txt === "g->mg" ||
                      proop.txt === "mg->g" ||
                      proop.txt === "μg->mg"
                    ? 20
                    : proop.txt === "m->foot" ||
                      proop.txt === "foot->m" ||
                      proop.txt === "m->inch" ||
                      proop.txt === "inch->m" ||
                      proop.txt === "m->yard" ||
                      proop.txt === "yard->m" ||
                      proop.txt === "km->mile" ||
                      proop.txt === "mile->km" ||
                      proop.txt === "m->km" ||
                      proop.txt === "cm->inch" ||
                      proop.txt === "inch->cm" ||
                      proop.txt === "cm->m"
                    ? 18
                    : proop.txt === "ton->USton"
                    ? 14.5
                    : 40,
              },
            ]}
          >
            {proop.txt}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  const [number, setNumber] = useState("");
  const [numere, setNumere] = useState([]);
  const [calcule, setCalcule] = useState([]);

  const [calc, setCalc] = useState([]);
  const [semn, setSemn] = useState([]);
  const [rezvazut, setRezvazut] = useState("");

  const [isPressed, setIsPressed] = useState(false);
  const [isPPressed, setIsPPressed] = useState(false);
  const [isTPressed, setIsTPressed] = useState(false);
  const [isMPressed, setIsMPressed] = useState(false);
  const [isLPressed, setIsLPressed] = useState(false);
  const [isDouble, setIsDouble] = useState(false);

  var rezultat;
  var ceva;
  var rez;
  const [c, setC] = useState("");
  function updateNumber(tasta) {
    let currentC;
    if (tasta === "x^2") {
      setC(String(Math.pow(Number(c), 2)));
      currentC = String(Math.pow(Number(c), 2));
    } else if (tasta === "x^3") {
      setC(String(Math.pow(Number(c), 3)));
      currentC = String(Math.pow(Number(c), 3));
    } else if (tasta === "√x") {
      setC(String(Math.sqrt(Number(c))));
      currentC = String(Math.sqrt(Number(c)));
    } else if (tasta === "∛x") {
      setC(String(Math.cbrt(Number(c))));
      currentC = String(Math.cbrt(Number(c)));
    } else if (tasta === "1/x") {
      setC(String(1 / Number(c)));
      currentC = String(1 / Number(c));
    } else if (tasta === "2^x") {
      setC(String(Math.pow(2, Number(c))));
      currentC = String(Math.pow(2, Number(c)));
    } else if (tasta === "10^x") {
      setC(String(Math.pow(10, Number(c))));
      currentC = String(Math.pow(10, Number(c)));
    } else if (tasta === "sin") {
      setC(String(Math.sin(Number(c))));
      currentC = String(Math.sin(Number(c)));
    } else if (tasta === "cos") {
      setC(String(Math.cos(Number(c))));
      currentC = String(Math.cos(Number(c)));
    } else if (tasta === "tan") {
      setC(String(Math.tan(Number(c))));
      currentC = String(Math.tan(Number(c)));
    } else if (tasta === "sinh") {
      setC(String(Math.sinh(Number(c))));
      currentC = String(Math.sinh(Number(c)));
    } else if (tasta === "cosh") {
      setC(String(Math.cosh(Number(c))));
      currentC = String(Math.cosh(Number(c)));
    } else if (tasta === "tanh") {
      setC(String(Math.tanh(Number(c))));
      currentC = String(Math.tanh(Number(c)));
    } else if (tasta === "ln") {
      setC(String(Math.log(Number(c))));
      currentC = String(Math.log(Number(c)));
    } else if (tasta === "log(10)") {
      setC(String(Math.log10(Number(c))));
      currentC = String(Math.log10(Number(c)));
    } else if (tasta === "e^x") {
      setC(String(Math.exp(Number(c))));
      currentC = String(Math.exp(Number(c)));
    } else if (tasta === "x!") {
      setC(String(factorial(Number(c))));
      currentC = String(factorial(Number(c)));
    } else if (tasta === "π") {
      setC(String(Math.PI));
      currentC = String(Math.PI);
    } else if (tasta === "e") {
      setC(String(Math.E));
      currentC = String(Math.E);
    } else if (tasta === "Rand") {
      setC(String(Math.random()));
      currentC = String(Math.random());
    } else if (tasta === "log(2)") {
      setC(String(Math.log2(Number(c))));
      currentC = String(Math.log2(Number(c)));
    } else if (tasta === "kg->lbs") {
      setC(String(Number(c) * 2.20462));
      currentC = String(Number(c) * 2.20462);
    } else if (tasta === "lbs->kg") {
      setC(String(Number(c) / 2.20462));
      currentC = String(Number(c) / 2.20462);
    } else if (tasta === "g->oz") {
      setC(String(Number(c) * 0.035274));
      currentC = String(Number(c) * 0.035274);
    } else if (tasta === "oz->g") {
      setC(String(Number(c) / 0.035274));
      currentC = String(Number(c) / 0.035274);
    } else if (tasta === "kg->g") {
      setC(String(Number(c) * 1000));
      currentC = String(Number(c) * 1000);
    } else if (tasta === "kg->ton") {
      setC(String(Number(c) / 1000));
      currentC = String(Number(c) / 1000);
    } else if (tasta === "ton->kg") {
      setC(String(Number(c) * 1000));
      currentC = String(Number(c) * 1000);
    } else if (tasta === "ton->USton") {
      setC(String(Number(c) / 1.10231));
      currentC = String(Number(c) / 1.10231);
    } else if (tasta === "g->mg") {
      setC(String(Number(c) * 1000));
      currentC = String(Number(c) * 1000);
    } else if (tasta === "mg->g") {
      setC(String(Number(c) / 1000));
      currentC = String(Number(c) / 1000);
    } else if (tasta === "μg->mg") {
      setC(String(Number(c) / 1000));
      currentC = String(Number(c) / 1000);
    } else if (tasta === "m->foot") {
      setC(String(Number(c) * 3.28084));
      currentC = String(Number(c) * 3.28084);
    } else if (tasta === "foot->m") {
      setC(String(Number(c) / 3.28084));
      currentC = String(Number(c) / 3.28084);
    } else if (tasta === "m->inch") {
      setC(String(Number(c) * 39.3701));
      currentC = String(Number(c) * 39.3701);
    } else if (tasta === "inch->m") {
      setC(String(Number(c) / 39.3701));
      currentC = String(Number(c) / 39.3701);
    } else if (tasta === "m->yard") {
      setC(String(Number(c) * 1.09361));
      currentC = String(Number(c) * 1.09361);
    } else if (tasta === "yard->m") {
      setC(String(Number(c) / 1.09361));
      currentC = String(Number(c) / 1.09361);
    } else if (tasta === "cm->inch") {
      setC(String(Number(c) / 2.54));
      currentC = String(Number(c) / 2.54);
    } else if (tasta === "inch->cm") {
      setC(String(Number(c) * 2.54));
      currentC = String(Number(c) * 2.54);
    } else if (tasta === "cm->m") {
      setC(String(Number(c) / 100));
      currentC = String(Number(c) / 100);
    } else if (tasta === "m->cm") {
      setC(String(Number(c) * 100));
      currentC = String(Number(c) * 100);
    } else if (tasta === "m->km") {
      setC(String(Number(c) / 1000));
      currentC = String(Number(c) / 1000);
    } else if (tasta === "km->mile") {
      setC(String(Number(c) / 1.60934));
      currentC = String(Number(c) / 1.60934);
    } else if (tasta === "mile->km") {
      setC(String(Number(c) * 1.60934));
      currentC = String(Number(c) * 1.60934);
    } else {
      setC((c) => c + tasta);
      currentC = c + tasta;
    }
    if (calc.length >= 1 && semn.length >= 1) {
      calc.push(Number(currentC));
      console.log(calc);
      for (let i = 0; i < semn.length; i++) {
        if (
          semn.includes("x^y") === true ||
          semn.includes("y√x") === true ||
          semn.includes("log(y)") === true
        ) {
          {
            if (semn[i] === "x^y") {
              ceva = Math.pow(calc[i], calc[i + 1]);
              calc.splice(i, 2, ceva);
              semn.splice(i, 1);
              i--;
            } else if (semn[i] === "y√x") {
              ceva = Math.pow(calc[i], 1 / calc[i + 1]);
              calc.splice(i, 2, ceva);
              semn.splice(i, 1);
              i--;
            } else if (semn[i] === "log(y)") {
              ceva = Math.log(calc[i + 1]) / Math.log(calc[i]);
              calc.splice(i, 2, ceva);
              semn.splice(i, 1);
              i--;
            }
          }
        }
      }

      for (let i = 0; i < semn.length; i++) {
        if (semn.includes("×") === true || semn.includes("÷") === true) {
          if (semn[i] === "×") {
            ceva = calc[i] * calc[i + 1];
            calc.splice(i, 2, ceva);
            semn.splice(i, 1);
            i--;
          } else if (semn[i] === "÷") {
            ceva = calc[i] / calc[i + 1];
            calc.splice(i, 2, ceva);
            semn.splice(i, 1);
            i--;
          }
        }
      }
      for (let i = 0; i < semn.length; i++) {
        if (semn.includes("+") === true || semn.includes("-") === true) {
          if (semn[i] === "+") {
            ceva = calc[i] + calc[i + 1];
            calc.splice(i, 2, ceva);
            semn.splice(i, 1);
            i--;
          } else if (semn[i] === "-") {
            ceva = calc[i] - calc[i + 1];
            calc.splice(i, 2, ceva);
            semn.splice(i, 1);
            i--;
          }
        }
      }

      rez = calc[0];
      setRezvazut(rez);
      calc.splice(0, calc.length);
      semn.splice(0, semn.length);
      for (let i = 0; i < numere.length; i++) {
        calc.splice(i, 1, numere[i]);
      }
      for (let i = 0; i < calcule.length; i++) {
        semn.splice(i, 1, calcule[i]);
      }
    }
  }

  function handlePress(tasta) {
    if (tasta === "AC") {
      setNumber("");
      setCalcule([]);
      setNumere([]);
      setIsPPressed(false);
      setIsTPressed(false);
      setIsMPressed(false);
      setIsLPressed(false);
      setCalc([]);
      setSemn([]);
      setIsDouble(false);
      setRezvazut("");
      setC("");
    } else if (
      tasta === "O" ||
      tasta === "N" ||
      tasta === "P" ||
      tasta === "T" ||
      tasta === "M" ||
      tasta === "L"
    ) {
    } else if (tasta === "=") {
      numere.push(Number(number));
      for (let i = 0; i < calcule.length; i++) {
        if (
          calcule.includes("x^y") === true ||
          calcule.includes("y√x") === true ||
          calcule.includes("log(y)") === true
        ) {
          {
            if (calcule[i] === "x^y") {
              ceva = Math.pow(numere[i], numere[i + 1]);
              numere.splice(i, 2, ceva);
              calcule.splice(i, 1);
              i--;
            } else if (calcule[i] === "y√x") {
              ceva = Math.pow(numere[i], 1 / numere[i + 1]);
              numere.splice(i, 2, ceva);
              calcule.splice(i, 1);
              i--;
            } else if (calcule[i] === "log(y)") {
              ceva = Math.log(numere[i + 1]) / Math.log(numere[i]);
              numere.splice(i, 2, ceva);
              calcule.splice(i, 1);
              i--;
            }
          }
        }
      }

      for (let i = 0; i < calcule.length; i++) {
        if (calcule.includes("×") === true || calcule.includes("÷") === true) {
          if (calcule[i] === "×") {
            ceva = numere[i] * numere[i + 1];
            numere.splice(i, 2, ceva);
            calcule.splice(i, 1);
            i--;
          } else if (calcule[i] === "÷") {
            ceva = numere[i] / numere[i + 1];
            numere.splice(i, 2, ceva);
            calcule.splice(i, 1);
            i--;
          }
        }
      }
      for (let i = 0; i < calcule.length; i++) {
        if (calcule.includes("+") === true || calcule.includes("-") === true) {
          if (calcule[i] === "+") {
            ceva = numere[i] + numere[i + 1];
            numere.splice(i, 2, ceva);
            calcule.splice(i, 1);
            i--;
          } else if (calcule[i] === "-") {
            ceva = numere[i] - numere[i + 1];
            numere.splice(i, 2, ceva);
            calcule.splice(i, 1);
            i--;
          }
        }
      }
      rezultat = numere[0];
      setCalcule([]);
      setNumere([]);
      setNumber(String(rezultat));
      calc.splice(0, calc.length, rezultat);
      semn.splice(0, semn.length);
      setRezvazut("");
      setC("");
      setIsDouble(false);
    } else if (
      tasta === "+" ||
      tasta === "-" ||
      tasta === "×" ||
      tasta === "÷" ||
      tasta === "x^y" ||
      tasta === "y√x" ||
      tasta === "log(y)"
    ) {
      if (!isDouble) {
        setNumere((numere) => [...numere, Number(number)]);
        setCalcule((calcule) => [...calcule, tasta]);
        setSemn((semn) => [...semn, tasta]);
        setCalc((calc) => [...calc, Number(number)]);
        setNumber("");
        setC("");
      }
    } else if (number === "" && tasta === "=") {
      setNumber("0");
    } else if (number === "" && tasta === "%") {
      setNumber("0");
    } else if (tasta === "Rand") {
      setNumber(String(Math.random()));
      updateNumber(tasta);
    } else if (tasta === "π") {
      setNumber(String(Math.PI));
      updateNumber(tasta);
    } else if (tasta === "e") {
      setNumber(String(Math.E));
      updateNumber(tasta);
    } else if (tasta === "x^2") {
      setNumber(String(Math.pow(Number(number), 2)));
      updateNumber(tasta);
    } else if (tasta === "x^3") {
      setNumber(String(Math.pow(Number(number), 3)));
      updateNumber(tasta);
    } else if (tasta === "x^y") {
      setNumber(String(Math.pow(Number(number), Number(number))));
    } else if (tasta === "√x") {
      setNumber(String(Math.sqrt(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "∛x") {
      setNumber(String(Math.cbrt(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "y√x") {
      setNumber(String(Math.pow(Number(number), 1 / Number(number))));
    } else if (tasta === "1/x") {
      setNumber(String(1 / Number(number)));
      updateNumber(tasta);
    } else if (tasta === "2^x") {
      setNumber(String(Math.pow(2, Number(number))));
      updateNumber(tasta);
    } else if (tasta === "10^x") {
      setNumber(String(Math.pow(10, Number(number))));
      updateNumber(tasta);
    } else if (tasta === "ln") {
      setNumber(String(Math.log(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "log(10)") {
      setNumber(String(Math.log10(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "sin") {
      setNumber(String(Math.sin(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "cos") {
      setNumber(String(Math.cos(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "tan") {
      setNumber(String(Math.tan(Number(number))));
    } else if (tasta === "sinh") {
      setNumber(String(Math.sinh(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "cosh") {
      setNumber(String(Math.cosh(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "tanh") {
      setNumber(String(Math.tanh(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "e^x") {
      setNumber(String(Math.exp(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "x!") {
      if (Number.isInteger(Number(number)) === true && Number(number) >= 0) {
        setNumber(String(factorial(Number(number))));
        updateNumber(tasta);
      }
    } else if (tasta === "log(2)") {
      setNumber(String(Math.log2(Number(number))));
      updateNumber(tasta);
    } else if (tasta === "m->foot") {
      setNumber(String(Number(number) * 3.28084));
      updateNumber(tasta);
    } else if (tasta === "foot->m") {
      setNumber(String(Number(number) * 0.3048));
      updateNumber(tasta);
    } else if (tasta === "m->inch") {
      setNumber(String(Number(number) * 39.3701));
      updateNumber(tasta);
    } else if (tasta === "inch->m") {
      setNumber(String(Number(number) * 0.0254));
      updateNumber(tasta);
    } else if (tasta === "m->yard") {
      setNumber(String(Number(number) * 1.09361));
      updateNumber(tasta);
    } else if (tasta === "yard->m") {
      setNumber(String(Number(number) * 0.9144));
      updateNumber(tasta);
    } else if (tasta === "km->mile") {
      setNumber(String(Number(number) * 0.621371));
      updateNumber(tasta);
    } else if (tasta === "mile->km") {
      setNumber(String(Number(number) * 1.60934));
      updateNumber(tasta);
    } else if (tasta === "cm->inch") {
      setNumber(String(Number(number) * 0.393701));
      updateNumber(tasta);
    } else if (tasta === "inch->cm") {
      setNumber(String(Number(number) * 2.54));
      updateNumber(tasta);
    } else if (tasta === "cm->m") {
      setNumber(String(Number(number) * 0.01));
      updateNumber(tasta);
    } else if (tasta === "m->km") {
      setNumber(String(Number(number) * 0.001));
      updateNumber(tasta);
    } else if (tasta === "kg->lbs") {
      setNumber(String(Number(number) * 2.20462));
      updateNumber(tasta);
    } else if (tasta === "lbs->kg") {
      setNumber(String(Number(number) * 0.453592));
      updateNumber(tasta);
    } else if (tasta === "g->oz") {
      setNumber(String(Number(number) * 0.035274));
      updateNumber(tasta);
    } else if (tasta === "oz->g") {
      setNumber(String(Number(number) * 28.3495));
      updateNumber(tasta);
    } else if (tasta === "kg->g") {
      setNumber(String(Number(number) * 1000));
      updateNumber(tasta);
    } else if (tasta === "g->kg") {
      setNumber(String(Number(number) * 0.001));
      updateNumber(tasta);
    } else if (tasta === "kg->ton") {
      setNumber(String(Number(number) * 0.001));
      updateNumber(tasta);
    } else if (tasta === "ton->kg") {
      setNumber(String(Number(number) * 1000));
      updateNumber(tasta);
    } else if (tasta === "ton->USton") {
      setNumber(String(Number(number) * 1.10231));
      updateNumber(tasta);
    } else if (tasta === "g->mg") {
      setNumber(String(Number(number) * 1000));
      updateNumber(tasta);
    } else if (tasta === "mg->g") {
      setNumber(String(Number(number) * 0.001));
      updateNumber(tasta);
    } else if (tasta === "μg->mg") {
      setNumber(String(Number(number) * 0.001));
      updateNumber(tasta);
    } else if (
      number === "" &&
      (tasta === "±" ||
        tasta === "%" ||
        tasta === "÷" ||
        tasta === "×" ||
        tasta === "-" ||
        tasta === "+" ||
        tasta === "x^y" ||
        tasta === "y√x" ||
        tasta === "log(y)")
    ) {
      setNumber("0");
    } else if (number === "" && tasta === ".") {
      setNumber("0.");
    } else if (number === "0" && tasta === ".") {
      setNumber("0.");
    } else if (number.includes(".") === true && tasta === ".") {
      setNumber(number);
    } else if (tasta === "±") {
      setNumber(String(Number(number) * -1));
    } else if (tasta === "%") {
      setNumber(String(Number(number) / 100));
    } else {
      setNumber((number) => number + tasta);
      updateNumber(tasta);
    }

    if (
      tasta === "+" ||
      tasta === "-" ||
      tasta === "×" ||
      tasta === "÷" ||
      tasta === "x^y" ||
      tasta === "y√x" ||
      tasta === "log(y)" ||
      tasta === "."
    ) {
      setIsDouble(true);
    } else {
      setIsDouble(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Text style={[styles.showntext, { top: 10 }]}>{number}</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Text style={[styles.showntext, { fontSize: 20, bottom: 47 }]}>
          {rezvazut}
        </Text>
      </View>
      <View style={styles.numpad}>
        <RoundButton txt="O" />
        <RoundButton txt="N" />
        <RoundButton txt="P" />
        <RoundButton txt="T" />
        <RoundButton txt="M" />
        <RoundButton txt="L" />
      </View>
      <View style={styles.numpad}>
        <RoundButton txt="AC" />
        <RoundButton txt="±" />
        <RoundButton txt="%" />
        <RoundButton txt="÷" />
      </View>
      <View style={styles.numpad}>
        <RoundButton txt="7" />
        <RoundButton txt="8" />
        <RoundButton txt="9" />

        <RoundButton txt="x^2" />
        <RoundButton txt="x^3" />
        <RoundButton txt="x^y" />

        <RoundButton txt="sin" />
        <RoundButton txt="cos" />
        <RoundButton txt="tan" />

        <RoundButton txt="m->foot" />
        <RoundButton txt="foot->m" />
        <RoundButton txt="m->inch" />

        <RoundButton txt="kg->lbs" />
        <RoundButton txt="lbs->kg" />
        <RoundButton txt="g->oz" />

        <RoundButton txt="×" />
      </View>
      <View style={styles.numpad}>
        <RoundButton txt="4" />
        <RoundButton txt="5" />
        <RoundButton txt="6" />

        <RoundButton txt="√x" />
        <RoundButton txt="∛x" />
        <RoundButton txt="y√x" />

        <RoundButton txt="sinh" />
        <RoundButton txt="cosh" />
        <RoundButton txt="tanh" />

        <RoundButton txt="inch->m" />
        <RoundButton txt="m->yard" />
        <RoundButton txt="yard->m" />

        <RoundButton txt="oz->g" />
        <RoundButton txt="kg->g" />
        <RoundButton txt="g->kg" />

        <RoundButton txt="-" />
      </View>
      <View style={styles.numpad}>
        <RoundButton txt="1" />
        <RoundButton txt="2" />
        <RoundButton txt="3" />

        <RoundButton txt="1/x" />
        <RoundButton txt="2^x" />
        <RoundButton txt="10^x" />

        <RoundButton txt="e^x" />
        <RoundButton txt="x!" />
        <RoundButton txt="ln" />

        <RoundButton txt="cm->inch" />
        <RoundButton txt="inch->cm" />
        <RoundButton txt="cm->m" />

        <RoundButton txt="kg->ton" />
        <RoundButton txt="ton->kg" />
        <RoundButton txt="ton->USton" />

        <RoundButton txt="+" />
      </View>
      <View style={styles.numpad}>
        <RoundButton txt="0" />
        <RoundButton txt="." />

        <RoundButton txt="e" />
        <RoundButton txt="π" />
        <RoundButton txt="Rand" />

        <RoundButton txt="log(2)" />
        <RoundButton txt="log(10)" />
        <RoundButton txt="log(y)" />

        <RoundButton txt="m->km" />
        <RoundButton txt="km->mile" />
        <RoundButton txt="mile->km" />

        <RoundButton txt="g->mg" />
        <RoundButton txt="mg->g" />
        <RoundButton txt="μg->mg" />

        <RoundButton txt="=" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  invisible: {
    opacity: 1,
  },
  numpad: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  to: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    borderRadius: 50,
    height: 80,
    width: 80,
    cursor: "pointer",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  txt: {
    fontSize: 40,
    color: "white",
  },
  showntext: {
    color: "white",
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 25,
    marginLeft: 20,
    fontSize: 65,
  },
});
