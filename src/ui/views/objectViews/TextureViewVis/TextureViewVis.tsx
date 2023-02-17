import React from 'react';
import { ReplayTextureView } from '../../../../replay';
import TextureLevelViewer from '../../../components/TextureLevelViewer/TextureLevelViewer';
import { JsonValueObject } from '../../../components/JsonValue/JsonValue';

export default function TextureViewVis({ data }: { data: ReplayTextureView }) {
    return (
        <div className="wgdb-vis">
            <JsonValueObject data={data} />
            <div className="wgdb-top-separator"></div>
            <TextureLevelViewer
                key={data.replayObjectKey}
                texture={data.texture}
                baseMipLevel={data.baseMipLevel}
                mipLevelCount={data.mipLevelCount}
                baseArrayLayer={data.baseArrayLayer}
                arrayLayerCount={data.arrayLayerCount}
                displayType={data.dimension === 'cube' || data.dimension === 'cube-array' ? 'cube' : '2d'}
            />
        </div>
    );
}
