

export default function Layout(
  props: {
    children: React.ReactNode;
  }
) {
  return (
    <div>
      레이아웃

      <div>
        { props.children }
      </div>
    </div>
  );
}