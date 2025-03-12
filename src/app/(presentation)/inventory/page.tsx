import { ClassifiedCard } from '../../../components/inventory/classified-card';
import { ClassifiedsList } from '../../../components/inventory/classifieds-list';
import { AwaitedPageProps, Favourites, PageProps } from '../../../config/types';
import { prisma } from '../../../lib/prisma';
import { redis } from '../../../lib/redis-store';
import { getSourceId } from '../../../lib/source-id';

const getInventory = async (searchParams: AwaitedPageProps['searchParams']) => {
  return prisma.classified.findMany({
    include: { images: true },
  });
};

export default async function InventoryPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const classifieds = await getInventory(searchParams);
  const count = await prisma.classified.count();

  const sourceId = await getSourceId();
  const favourties = await redis.get<Favourites>(sourceId ?? '');

  console.log(favourties);

  return (
    <>
      <ClassifiedsList
        classifieds={classifieds}
        favourites={favourties ? favourties.ids : []}
      />
    </>
  );
}
