import EventEmmiter from 'events'

const emmitor = new EventEmmiter()

const RequestTypes = [
  {
    type: 'send',
    payload: 'to send a document'
  },
  {
    type: 'receive',
    payload: 'to receive a document'
  },
  {
    type: 'sing',
    payload: 'to sing a document'
  }
]


class Customer {
  constructor({type, payload}) {
    this.type = type;
    this.payload = payload
  }
}

const generateIntInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min +1))
}

class Handler {
  static send(payload) {
    console.log('send request', payload)
  }
  static receive(payload) {
    console.log('receive request', payload)
  }
  static sing(payload) {
    console.log('sing request', payload)
  }
}

emmitor.emit('send',)

emmitor.on('send', Handler.send)
emmitor.on('receive', Handler.receive)
emmitor.on('sing', Handler.sing)

