import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import HeaderOverlay from '../../Components/Common/HeaderOverlay';
import { IApplication } from '../../Types/Models/Application';
import { TextInput, Button } from 'react-native-paper';
import DatePicker from '@react-native-community/datetimepicker';
import { SCREEN_WIDTH } from '../../Constants/Metrics';
import moment from 'moment';
import { Theme } from '../../Constants';
import Picker from 'react-native-picker-select';
import { useSelector } from 'react-redux';
import { AppState } from '../../reducers';
import { AddApplication } from '../../Services/Applications';
const index = () => {
  const [application, setApplication] = useState<IApplication>({
    personalInfo: {
      fname: '',
      lname: '',
      fathersName: '',
      dob: new Date(),
      placeOfBirth: '',
    },
    contactInfo: {
      phoneNumber: '',
      mobile: '',
      email: '',
    },
    educationalInfo: {
      highestDegree: '',
      academicType: '',
      prevSchool: '',
    },
    aulInfo: {
      prefMajor: '',
      campus: '',
    },
  });
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [showDate, setShowDate] = useState<boolean>(false);
  const Majors = useSelector((state: AppState) => state.majors.majors);
  const Campuses = useSelector((state: AppState) => state.campuses.campuses);
  const toggleShowDatePicker = useCallback(() => {
    setShowDate((prevState) => !prevState);
  }, [setShowDate]);
  const handleSubmit = () => {
    setSubmitting(true);

    AddApplication(application)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <KeyboardAvoidingView style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <TextInput
            style={styles.textInput}
            label="First Name"
            value={application?.personalInfo.fname}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                personalInfo: {
                  ...application.personalInfo,
                  fname: text,
                },
              })
            }
          />
          <TextInput
            style={styles.textInput}
            label="Last Name"
            value={application?.personalInfo.lname}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                personalInfo: {
                  ...application.personalInfo,
                  lname: text,
                },
              })
            }
          />
          <TextInput
            style={styles.textInput}
            label="Father's Name"
            value={application?.personalInfo.fathersName}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                personalInfo: {
                  ...application.personalInfo,
                  fathersName: text,
                },
              })
            }
          />
          <TextInput
            style={styles.textInput}
            label="Place of Birth"
            value={application?.personalInfo.placeOfBirth}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                personalInfo: {
                  ...application.personalInfo,
                  placeOfBirth: text,
                },
              })
            }
          />
          <Button
            mode="outlined"
            style={styles.btn}
            onPress={toggleShowDatePicker}
            loading={submitting}
            icon="calendar"
          >
            Select date of birth
          </Button>
          {showDate && (
            <View style={styles.datePicker}>
              <DatePicker
                value={application.personalInfo.dob}
                mode="date"
                display="inline"
                onChange={(event, date) =>
                  setApplication({
                    ...application,
                    personalInfo: {
                      ...application.personalInfo,
                      dob: date || new Date(),
                    },
                  })
                }
              />
            </View>
          )}
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.section}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <TextInput
            style={styles.textInput}
            label="Phone Number"
            value={application?.contactInfo.phoneNumber}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                contactInfo: {
                  ...application.contactInfo,
                  phoneNumber: text,
                },
              })
            }
          />
          <TextInput
            style={styles.textInput}
            label="Mobile"
            value={application?.contactInfo.mobile}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                contactInfo: {
                  ...application.contactInfo,
                  mobile: text,
                },
              })
            }
          />
          <TextInput
            style={styles.textInput}
            label="Email Address"
            value={application?.contactInfo.email}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                contactInfo: {
                  ...application.contactInfo,
                  email: text,
                },
              })
            }
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.section}>
          <Text style={styles.sectionTitle}>Educational Information</Text>
          <TextInput
            style={styles.textInput}
            label="Highest degree"
            value={application?.educationalInfo.highestDegree}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                educationalInfo: {
                  ...application.educationalInfo,
                  highestDegree: text,
                },
              })
            }
          />
          <TextInput
            style={styles.textInput}
            label="Academic Type"
            value={application?.educationalInfo.academicType}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                educationalInfo: {
                  ...application.educationalInfo,
                  academicType: text,
                },
              })
            }
          />
          <TextInput
            style={styles.textInput}
            label="Previous School"
            value={application?.educationalInfo.prevSchool}
            mode="flat"
            onChangeText={(text) =>
              setApplication({
                ...application,
                educationalInfo: {
                  ...application.educationalInfo,
                  prevSchool: text,
                },
              })
            }
          />
        </KeyboardAvoidingView>
        <KeyboardAvoidingView style={styles.section}>
          <Text style={styles.sectionTitle}>AUL Information</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <View style={styles.pickerContainers}>
              <Text style={styles.sectionTitle}>Your desired campus</Text>
              <Picker
                onValueChange={(value) =>
                  setApplication({
                    ...application,
                    aulInfo: {
                      ...application.aulInfo,
                      campus: value,
                    },
                  })
                }
                items={Campuses.map((campus) => {
                  return {
                    label: campus.title,
                    value: campus._id,
                  };
                })}
              />
            </View>
            <View style={styles.pickerContainers}>
              <Text style={styles.sectionTitle}>Your desired major</Text>

              <Picker
                onValueChange={(value) =>
                  setApplication({
                    ...application,
                    aulInfo: {
                      ...application.aulInfo,
                      prefMajor: value,
                    },
                  })
                }
                items={Majors.map((major) => {
                  return {
                    label: major.title,
                    value: major._id,
                  };
                })}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <Button
          mode="outlined"
          style={styles.btn}
          onPress={handleSubmit}
          loading={submitting}
          icon="send"
        >
          Submit
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  textInput: {
    backgroundColor: 'transparent',
  },
  pickerContainers: {
    padding: 15,
  },
  btn: {
    padding: 10,
    marginTop: 15,
    borderColor: Theme.colors.primary,
    borderBottomWidth: 2,
    borderRadius: 10,
  },
  dob: {
    color: 'grey',
  },
  datePicker: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    color: Theme.colors.primary,
  },
});
