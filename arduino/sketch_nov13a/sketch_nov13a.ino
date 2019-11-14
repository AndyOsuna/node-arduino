int boton = 5;

void setup() {
  Serial.begin(9600);
  pinMode(boton, INPUT);
}

void loop() {
  int data = digitalRead(boton);
  if(data != ""){
    Serial.println(data);
  }
  delay(400);
}
