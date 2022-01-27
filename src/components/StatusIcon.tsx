/**
 *
 * @returns Component to show issue status
 */
const StatusIcon = ({ status }: { status?: string }) => {
  switch (status) {
    case "open": {
      return (
        <div className="bg-emerald-500 p-3 rounded-2xl place-items-center flex gap-2 text-xl capitalize">
          <span>{status}</span>
        </div>
      );
    }
    default: {
      return <span>{status}</span>;
    }
  }
};
export default StatusIcon;
