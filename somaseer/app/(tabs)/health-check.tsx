import { StyleSheet } from "react-native";            
import {Btn} from "@/components/themed-btn";
import {ThemedText} from '@/components/themed-text';
import {ThemedView} from '@/components/themed-view';

import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";

// --------------------------------------------------
// Types
// --------------------------------------------------

type ScanResult = {
  id: number;
  title: string;
  value: string;
};

type CheckItem = {
  id: number;
  label: string;
};

// --------------------------------------------------
// Dummy data
// --------------------------------------------------

const scanResults: ScanResult[] = [
  {
    id: 1,
    title: "Heart Rate",
    value: "72 BPM",
  },
  {
    id: 2,
    title: "Temperature",
    value: "36.7°C",
  },
  {
    id: 3,
    title: "Blood Pressure",
    value: "120/80 mmHg",
  },
];

const checkItems: CheckItem[] = [
  {
    id: 1,
    label: "I feel well today",
  },
  {
    id: 2,
    label: "I have had enough rest",
  },
  {
    id: 3,
    label: "I have eaten today",
  },
  {
    id: 4,
    label: "I am ready for the check-in",
  },
];

// --------------------------------------------------
// Main screen
// --------------------------------------------------

export default function HealthCheck() {
  const [step, setStep] = useState(1);
  const [prev, setPrev] = useState(step);

  // Step 1
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [agreed, setAgreed] = useState(false);

  //step 2
  const [proxScan, setProxScan] = useState(false);

  // Step 4
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  // Step 6
  const [score, setScore] = useState<number | null>(null);

  // ------------------------------------------------
  // Navigation
  // ------------------------------------------------

  function nextStep() {
    setStep((current) => current + 1);
    setPrev(step);
  }
  function prevStep(){
	  setStep(prev);
	  setPrev(prev -1)
  }

  function skipToStepFour() {
    setStep(4);
    setPrev(step);
  }

  // ------------------------------------------------
  // Checkboxes
  // ------------------------------------------------

  function toggleCheck(id: number) {
    setCheckedItems((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });
  }

  // ------------------------------------------------
  // Submit check-in
  // ------------------------------------------------

  function submitCheckIn() {
    const data = {
      name,
      region,
      scanResults,
      checkedItems,
    };

    console.log("Submitting:", data);

    nextStep();
  }

  // ------------------------------------------------
  // Proximity Scan
  // ------------------------------------------------
  function startProximityScan(){
	  //setProxScan(true);
  }

  // ------------------------------------------------
  // Sound check
  // ------------------------------------------------

  function startListening() {
    // Dummy sound check

    setTimeout(() => {
      setScore(87);
      nextStep();
    }, 1000);
  }

  // ------------------------------------------------
  // Render current step
  // ------------------------------------------------

  return (
    <ThemedView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {step === 1 && (
        <View style={styles.step}>
          <Text style={styles.title}>
            Let's get started
          </Text>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Name"
            style={styles.input}
          />

          <TextInput
            value={region}
            onChangeText={setRegion}
            placeholder="Region"
            style={styles.input}
          />

          <Pressable
            style={styles.agreement}
            onPress={() => setAgreed(!agreed)}
          >
            <View
              style={[
                styles.checkbox,
                agreed && styles.checkboxChecked,
              ]}
            >
              {agreed && (
                <Text style={styles.checkmark}>
                  ✓
                </Text>
              )}
            </View>

            <Text>
              I agree to continue
            </Text>
          </Pressable>

	  <Btn  variant="pri" disabled={!agreed} onPress={()=>{setAgreed(!agreed);nextStep();}}>Agree and Continue</Btn>
        </View>
      )}

      {step === 2 && (
        <View style={styles.step}>
          <Text style={styles.title}>
            Nearby Proximity Scan
          </Text>

          <Text style={styles.description}>
            Please place your device and remain in a relatively stationary position.
          </Text>

          <Btn
	    variant="pri"
            onPress={()=>{startProximityScan();nextStep}}>{proxScan?"Scanning...":"Scan"}</Btn>

          <Btn variant="sec" onPress={skipToStepFour}>
              Skip
          </Btn>
	  <Btn variant="ter"
                 onPress={prevStep}>
                 Go Back</Btn>
        </View>
      )}

      {step === 3 && (
        <View style={styles.step}>
          <Text style={styles.title}>
            Scan Results
          </Text>

          {scanResults.map((result) => (
            <View
              key={result.id}
              style={styles.resultCard}
            >
              <Text style={styles.resultTitle}>
                {result.title}
              </Text>

              <Text style={styles.resultValue}>
                {result.value}
              </Text>
            </View>
          ))}

          <Btn
            variant="pri"
            onPress={nextStep}>Continue to Check in</Btn>
	    <Btn variant="ter" 
		 onPress={prevStep}>
		 Go Back</Btn>
        </View>
      )}

      {step === 4 && (
        <View style={styles.step}>
          <Text style={styles.title}>
            Check In
          </Text>

          {checkItems.map((item) => {
            const checked = checkedItems.includes(
              item.id
            );

            return (
              <Pressable
                key={item.id}
                style={styles.checkItem}
                onPress={() => toggleCheck(item.id)}
              >
                <View
                  style={[
                    styles.checkbox,
                    checked &&
                      styles.checkboxChecked,
                  ]}
                >
                  {checked && (
                    <Text style={styles.checkmark}>
                      ✓
                    </Text>
                  )}
                </View>

                <Text style={styles.checkLabel}>
                  {item.label}
                </Text>
              </Pressable>
            );
          })}

          <Btn
	    variant="pri"
            onPress={submitCheckIn}>Submit to check-in</Btn>
	    <Btn variant="ter"
                 onPress={prevStep}>Go Back</Btn>
        </View>
      )}

      {step === 5 && (
        <View style={styles.step}>
          <Text style={styles.title}>
            Sound Check
          </Text>

          <Text style={styles.description}>
            We need to check your hearing
            environment for any audible sounds of discomfort
          </Text>

          <Btn
	    variant="pri"
            onPress={startListening}>Start listening</Btn>

          <Btn variant="ter"
                 onPress={prevStep}>Go Back</Btn>
        </View>
      )}

      {step === 6 && (
        <View style={styles.step}>
          <Text style={styles.title}>
            Your Score
          </Text>

          <Text style={styles.score}>
            {score ?? 0}
          </Text>

          <Text style={styles.description}>Your check-in has been completed.</Text>

          <Btn
	    variant="pri"
            onPress={() => setStep(1)}>Done</Btn>
	  <Btn variant="ter"
                 onPress={prevStep}>Go Back</Btn>
        </View>
      )}
    </ThemedView>
  );
}

// --------------------------------------------------
// Styles
// --------------------------------------------------

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },

  step: {
    flex: 1,
    gap: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 24
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  agreement: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#999",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  checkboxChecked: {
    backgroundColor: "black",
    borderColor: "black",
  },

  checkmark: {
    color: "white",
    fontWeight: "700",
  },

  skip: {
    textAlign: "center",
    fontSize: 16,
    padding: 12,
  },

  resultCard: {
    padding: 18,
    borderRadius: 12,
    backgroundColor: "#f2f2f2",
    gap: 5,
  },

  resultTitle: {
    fontSize: 15,
  },

  resultValue: {
    fontSize: 22,
    fontWeight: "600",
  },

  checkItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 8,
  },

  checkLabel: {
    flex: 1,
    fontSize: 16,
  },

  score: {
    fontSize: 72,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 30,
  },
});
