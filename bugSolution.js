```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only when 'count' changes
    console.log('Component rendered with count:', count);
    // Perform side effects here, only when count changes
  }, [count]); // 'count' is added to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```