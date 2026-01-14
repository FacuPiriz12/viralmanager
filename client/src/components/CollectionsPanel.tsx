import { useState } from "react";
import { FolderPlus, Folder, ChevronRight, Plus } from "lucide-react";
import { useCollections, useCreateCollection } from "@/hooks/use-collections";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export function CollectionsPanel() {
  const { data: collections = [], isLoading } = useCollections();
  const createMutation = useCreateCollection();
  const [isOpen, setIsOpen] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [collectionType, setCollectionType] = useState<"manual" | "profile">("manual");
  const [source, setSource] = useState("");
  const { toast } = useToast();

  const handleCreate = async () => {
    if (!newCollectionName.trim()) return;
    if (collectionType === "profile" && !source.trim()) return;
    
    try {
      await createMutation.mutateAsync({ 
        name: newCollectionName,
        type: collectionType,
        source: collectionType === "profile" ? source : null,
        videoIds: []
      });
      setIsOpen(false);
      setNewCollectionName("");
      setSource("");
      setCollectionType("manual");
      toast({
        title: "Collection created",
        description: collectionType === "profile" 
          ? `Syncing videos from ${source}...` 
          : `"${newCollectionName}" is ready.`,
      });
    } catch (e) {
      toast({
        title: "Error",
        description: "Failed to create collection.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-ttblack rounded-2xl p-6 border border-[#222] h-full shadow-xl flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-semibold text-white flex items-center gap-2">
          <Folder className="w-5 h-5 text-ttcyan" />
          My Collections
        </h4>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="p-1.5 bg-[#222] hover:bg-ttcyan hover:text-black rounded-lg transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </DialogTrigger>
          <DialogContent className="bg-ttblack border-[#333] text-white">
            <DialogHeader>
              <DialogTitle>New Collection</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-ttgray uppercase tracking-wider">Name</label>
                <input
                  value={newCollectionName}
                  onChange={(e) => setNewCollectionName(e.target.value)}
                  placeholder="E.g. Fitness Inspiration"
                  className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-3 outline-none focus:border-ttcyan text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-ttgray uppercase tracking-wider">Collection Type</label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCollectionType("manual")}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${collectionType === "manual" ? "bg-ttcyan text-black border-ttcyan" : "bg-transparent text-ttgray border-[#333]"}`}
                  >
                    Manual
                  </button>
                  <button 
                    onClick={() => setCollectionType("profile")}
                    className={`flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${collectionType === "profile" ? "bg-ttcyan text-black border-ttcyan" : "bg-transparent text-ttgray border-[#333]"}`}
                  >
                    Profile Sync
                  </button>
                </div>
              </div>

              {collectionType === "profile" && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                  <label className="text-xs font-bold text-ttgray uppercase tracking-wider">Creator Handle</label>
                  <input
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    placeholder="E.g. @mrbeast"
                    className="w-full bg-[#111] border border-[#333] rounded-lg px-4 py-3 outline-none focus:border-ttcyan text-white"
                  />
                  <p className="text-[10px] text-ttgray italic">We'll automatically fetch the most viral videos from this profile.</p>
                </div>
              )}
            </div>
            <DialogFooter>
              <button 
                onClick={handleCreate} 
                disabled={createMutation.isPending || !newCollectionName.trim() || (collectionType === "profile" && !source.trim())}
                className="bg-ttcyan text-black font-semibold px-4 py-2 rounded-lg hover:bg-ttcyan/90 disabled:opacity-50 transition-colors"
              >
                {createMutation.isPending ? "Creating..." : "Create Collection"}
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
        {isLoading && <div className="text-ttgray text-sm text-center py-4">Loading...</div>}
        
        {!isLoading && collections.length === 0 && (
          <div className="text-center py-8 px-4 border-2 border-dashed border-[#222] rounded-xl">
            <FolderPlus className="w-8 h-8 text-ttgray/30 mx-auto mb-2" />
            <p className="text-ttgray text-sm">No collections yet.</p>
            <button onClick={() => setIsOpen(true)} className="text-ttcyan text-xs mt-2 hover:underline">
              Create your first one
            </button>
          </div>
        )}

        {collections.map((c) => (
          <div 
            key={c.id} 
            className="group flex items-center justify-between p-3 rounded-lg hover:bg-[#1a1a1a] border border-transparent hover:border-[#333] cursor-pointer transition-all"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-8 h-8 rounded bg-[#111] flex items-center justify-center text-ttgray group-hover:text-ttcyan transition-colors">
                <Folder className="w-4 h-4" />
              </div>
              <div className="truncate">
                <div className="text-sm font-medium text-gray-200 group-hover:text-white truncate">{c.name}</div>
                <div className="text-xs text-ttgray">{c.videoIds?.length || 0} videos</div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#333] group-hover:text-white transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
