import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StarIcon } from 'lucide-react';
import { useCoffeeBeans } from '@/hooks/useCoffeeBeans';

const Home = () => {
  const { beans, loading, error } = useCoffeeBeans();

  const renderStars = (rating = 0) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <StarIcon
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-amber-600 text-amber-600' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brown-800 mb-2">Brew Notes</h1>
          <p className="text-brown-600">Your personal coffee bean collection</p>
        </div>

        {loading && (
          <div className="flex justify-center my-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brown-700"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
            {error}
          </div>
        )}

        {!loading && !error && beans.length === 0 && (
          <Card className="bg-white border-brown-200">
            <CardContent className="pt-6 text-center">
              <p className="text-brown-600">
                No coffee beans found. Start by adding your first one!
              </p>
              <Button className="mt-4 bg-brown-700 hover:bg-brown-800">
                Add Coffee Bean
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.isArray(beans) &&
            beans.map((bean) => (
              <Card
                key={bean.id}
                className="overflow-hidden border border-brown-200 bg-white hover:shadow-md transition-shadow"
              >
                <CardHeader className="bg-gradient-to-r from-amber-800 to-brown-700 text-white">
                  <CardTitle>{bean.name}</CardTitle>
                  <CardDescription className="text-amber-100">
                    Origin: {bean.origin}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-0.5">
                      {renderStars(bean.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {bean.rating ? `${bean.rating}/5` : 'Not rated'}
                    </span>
                  </div>
                  <Badge className="bg-amber-600 mb-3">{bean.roastLevel}</Badge>
                  <p className="text-gray-700 mt-2">
                    {bean.description ||
                      'No description available for this coffee bean.'}
                  </p>
                </CardContent>
                <CardFooter className="bg-amber-50 border-t border-brown-100">
                  <Button
                    className="bg-brown-700 hover:bg-brown-800 text-white"
                    onClick={() => (window.location.href = `/beans/${bean.id}`)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
