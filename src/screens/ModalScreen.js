import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTailwind } from 'tailwind-rn';

const ModalScreen = () => {
  const [timerName, setTimerName] = useState(null);
  const [round, setRound] = useState(null);
  const [roundTime, setRoundTime] = useState(null);
  const [rest, setRest] = useState(null);

  const incompleteForm = !roundTime || !round;
  return (
    <SafeAreaView style={useTailwind('flex-1')}>
      <View style={useTailwind(`mt-5`)}>
        <Text
          style={useTailwind(
            'text-2xl text-gray-500 p-2 font-bold text-center'
          )}
        >
          Boxing Timer:
        </Text>
      </View>
      <View style={useTailwind('flex-1 items-center pt-1')}>
        <View style={useTailwind(`flex-row`)}>
          <Text style={useTailwind('text-xl text-red-400 p-4 font-bold')}>
            Timer Name:
          </Text>
          <TextInput
            value={timerName}
            onChangeText={setTimerName}
            placeholder="Timer Name"
          />
        </View>

        <View style={useTailwind(`flex-row`)}>
          <Text
            style={useTailwind(
              'text-xl text-center text-red-400 p-4 font-bold'
            )}
          >
            Rounds:
          </Text>
          <TextInput
            value={round}
            onChangeText={setRound}
            placeholder="Rounds"
            keyboardType="numeric"
            maxLength={2}
          />
        </View>

        <View style={useTailwind(`flex-row`)}>
          <Text
            style={useTailwind(
              'text-xl text-center text-red-400 p-4 font-bold'
            )}
          >
            Round Time:
          </Text>
          <TextInput
            value={roundTime}
            onChangeText={setRoundTime}
            placeholder="Rounds Time"
            keyboardType="numeric"
            maxLength={5}
          />
        </View>

        <View style={useTailwind(`flex-row`)}>
          <Text
            style={useTailwind(
              'text-xl text-center text-red-400 p-4 font-bold'
            )}
          >
            Rest Time:
          </Text>
          <TextInput
            value={rest}
            onChangeText={setRest}
            placeholder="Rest Time"
            keyboardType="numeric"
            maxLength={5}
          />
        </View>

        <View style={useTailwind(`flex-row`)}>
          <Text
            style={useTailwind(
              'text-xl text-center text-red-400 p-4 font-bold'
            )}
          >
            Prepare time:
          </Text>
          <TextInput
            value={rest}
            onChangeText={setRest}
            placeholder="Prepare time"
            keyboardType="numeric"
            maxLength={5}
          />
        </View>

        <View style={useTailwind(`flex-row`)}>
          <Text
            style={useTailwind(
              'text-xl text-center text-red-400 p-4 font-bold'
            )}
          >
            Warning time:
          </Text>
          <TextInput
            value={rest}
            onChangeText={setRest}
            placeholder="Warning time"
            keyboardType="numeric"
            maxLength={5}
          />
        </View>

        <View style={useTailwind(`flex-row`)}>
          <Text
            style={useTailwind(
              'text-xl text-center text-red-400 p-4 font-bold'
            )}
          >
            Circle inner alerts?:
          </Text>
          <TextInput
            value={rest}
            onChangeText={setRest}
            placeholder="5, 10, 15"
            keyboardType="numeric"
            maxLength={14}
          />
        </View>

        <View style={useTailwind(`flex-row`)}>
          <Text
            style={useTailwind(
              'text-2xl text-center text-red-400 p-4 font-bold'
            )}
          >
            TOTAL TIME: 47:10
          </Text>
        </View>

        <View
          style={useTailwind(
            `w-full flex-row justify-evenly absolute bottom-10`
          )}
        >
          <TouchableOpacity
            disabled={incompleteForm}
            style={[
              useTailwind('w-36 py-3 rounded-xl bg-red-400'),
              incompleteForm
                ? useTailwind('bg-gray-400')
                : useTailwind('bg-red-400'),
            ]}
          >
            <Text style={useTailwind('text-center text-white text-sm')}>
              Save Settings
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={incompleteForm}
            style={[
              useTailwind('w-36 py-3 rounded-xl bg-red-400'),
              incompleteForm
                ? useTailwind('bg-gray-400')
                : useTailwind('bg-red-400'),
            ]}
          >
            <Text style={useTailwind('text-center text-white text-sm')}>
              Save As New Timer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ModalScreen;
