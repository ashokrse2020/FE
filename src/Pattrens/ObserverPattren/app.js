//https://www.youtube.com/watch?v=AkCozUJdbAo
//https://www.patterns.dev/posts/observer-pattern
//https://javascriptpatterns.vercel.app/patterns/design-patterns/observer-pattern

import { useCallback, useEffect, useState } from 'react';
import { Button, Input, Select, Space } from 'antd';
import observerPattren from './Pattrens/ObserverPattren/observerPattren';

function DisplayBlockA() {
  const [text, setText] = useState('Button A');

  useEffect(() => {
    observerPattren.subscribe((value) => setText(value));
    return () => {
      observerPattren.unsubscribe();
    }
  }, []);

  return (
    <Button type="primary" block>{text}</Button>
  )
}

function DisplayBlockB() {
  const [text, setText] = useState('Button B');

  useEffect(() => {
    observerPattren.subscribe((value) => setText(value));
    return () => {
      observerPattren.unsubscribe();
    }
  }, []);

  return (
    <Button type="primary" block>{text}</Button>
  )
}

function DisplayBlockC() {
  const [text, setText] = useState('Button C');

  useEffect(() => {
    observerPattren.subscribe((value) => setText(value));
    return () => {
      observerPattren.unsubscribe();
    }
  }, []);

  return (
    <Button type="primary" block>{text}</Button>
  )
}

export default function App(){
  const [inputText, setInputText] = useState();

  const onChange = (event) => {
    setInputText(event.target.value)
  }
  
  const onSubmit = useCallback(() => {
    observerPattren.notify(inputText);
  }, [inputText])

  return (
  <div>
    <Space>
      <Space.Compact style={{ width: '100%' }}>
        <Input value={inputText} onChange={onChange} />
        <Button type="primary" onClick={onSubmit}>Submit</Button>
      </Space.Compact>
    </Space>
    <br />
    <br />
    <Space direction="vertical">
      <Space.Compact>
        <DisplayBlockA />
      </Space.Compact>
      <Space.Compact>
        <DisplayBlockB />
      </Space.Compact>
      <Space.Compact>
        <DisplayBlockC />
      </Space.Compact>
    </Space>
  </div>
  );
}