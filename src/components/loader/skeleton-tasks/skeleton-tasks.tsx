import ContentLoader from "react-content-loader";

const SkeletonTasks = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height="100%"
    backgroundColor="#f3f3f3"
    foregroundColor="#b0b0b0"
  >
    <rect x="0" y="0" rx="3" ry="3" width="100%" height="95" />
    <rect x="0" y="110" rx="3" ry="3" width="100%" height="95" />
    <rect x="0" y="220" rx="3" ry="3" width="100%" height="95" />
  </ContentLoader>
);

export default SkeletonTasks;
