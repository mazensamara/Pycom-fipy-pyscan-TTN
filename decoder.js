function Decoder(bytes, port) {

  function to_string(bytes) {
    return String.fromCharCode.apply(null, bytes);
  }

  function to_int(buffer, offset) {
    return buffer[offset + 3] | buffer[offset + 2] << 8 | buffer[offset + 1] << 16 | buffer[offset] << 24
  }

  
  var light = to_int(bytes, 0) / 100; // Lumen
  var lux = to_int(bytes, 4) / 100; // Lux
  var roll = to_int(bytes, 8) / 100;// Roll in degrees in the range -180 to 180
  var pitch = to_int(bytes, 12) / 100; // Pitch in degrees in the range -90 to 90
  var acceleration_x = to_int(bytes, 16) / 100; //Acceleration x 
  var acceleration_y = to_int(bytes, 20) / 100; //Acceleration y
  var acceleration_z = to_int(bytes, 24) / 100; //Acceleration z
  var voltage = to_int(bytes, 28) / 100; // Battery voltage
  
    return {
      lumen: light,
      lux: lux,
      roll: roll,
      pitch: pitch,
      acceleration_x: acceleration_x,
      acceleration_y: acceleration_y,
      acceleration_z: acceleration_z,
      voltage: voltage
    };
  }
