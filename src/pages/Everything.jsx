import { NewsCategory } from "../components"

const Everything = () => {
  const topics = [
    'business',
    // 'entertainment',
    // 'game',
    // 'sport',
    // 'health',
    // 'economy',
    // 'politic',
    // 'technology',
    // 'culinary',
    // 'indonesia',
    // 'travel',
    // 'cars',
    // 'jobs'
  ]

  return (
    <div className="container mx-auto my-4">
      {
        topics.map((topic) => (
          <NewsCategory
            key={topic}
            topic={topic}
            showSortBy={false}
            sortBy='publishedAt'
            page={1}
            limit={3}
            cols={3}
          />
        ))
      }
    </div>
  );
};

export default Everything;
