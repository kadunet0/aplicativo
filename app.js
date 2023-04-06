import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [message, setMessage] = useState('');
  
  const policeContacts = [
    { name: 'Polícia Militar', number: '190' },
    { name: 'Polícia Civil', number: '197' },
    { name: 'Disque Denúncia', number: '181' }
  ];

  const firemanContacts = [
    { name: 'Corpo de Bombeiros', number: '193' },
    { name: 'Defesa Civil', number: '199' },
    { name: 'SAMU', number: '192' }
  ];

  const ambulanceContacts = [
    { name: 'SAMU', number: '192' },
    { name: 'Hospital', number: '0800-xxx-xxxx' },
    { name: 'Plano de saúde', number: '0800-xxx-xxxx' }
  ];

  const handleCall = (number) => {
    console.log(`Chamando ${number}`);
  };

  const handleSendMessage = (number) => {
    console.log(`Enviando mensagem para ${number}: ${message}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços de emergência</Text>
      <View style={styles.serviceContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-car" size={64} color="red" />
          <Text style={styles.serviceName}>Polícia</Text>
        </View>
        <ScrollView style={styles.contactList}>
          <FlatList
            data={policeContacts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCall(item.number)}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactNumber}>{item.number}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder="Digite sua mensagem aqui"
            onChangeText={setMessage}
            value={message}
          />
          <TouchableOpacity style={styles.button} onPress={() => handleSendMessage(policeContacts[0].number)}>
            <Text style={styles.buttonText}>Enviar mensagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleCall(policeContacts[0].number)}>
            <Text style={styles.buttonText}>Ligar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.serviceContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-flame" size={64} color="orange" />
          <Text style={styles.serviceName}>Bombeiros</Text>
        </View>
        <ScrollView style={styles.contactList}>
          <FlatList
            data={firemanContacts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCall(item.number)}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactNumber}>{item.number}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder="Digite sua mensagem aqui"
            onChangeText={setMessage}
            value={message}
          />
          <TouchableOpacity style={styles.button} onPress={() => handleSendMessage(firemanContacts[0].number)}>
            <Text style={styles.buttonText}>Enviar mensagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleCall(firemanContacts[0].number)}>
            <Text style={styles.buttonText}>Ligar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.serviceContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="md-medkit" size={64} color="green" />
          <Text style={styles.serviceName}>Ambulância</Text>
        </View>
        <ScrollView style={styles.contactList}>
          <FlatList
            data={ambulanceContacts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCall(item.number)}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactNumber}>{item.number}</Text>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.messageInput}
            placeholder="Digite sua mensagem aqui"
            onChangeText={setMessage}
            value={message}
          />
          <TouchableOpacity style={styles.button} onPress={() => handleSendMessage(ambulanceContacts[0].number)}>
            <Text style={styles.buttonText}>Enviar mensagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleCall(ambulanceContacts[0].number)}>
            <Text style={styles.buttonText}>Ligar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  serviceContainer: {
    marginBottom: 20
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  contactList: {
    maxHeight: 120
  },
  contactName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  contactNumber: {
    fontSize: 12,
    color: 'gray'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 4,
    marginRight: 10
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    padding: 6
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

